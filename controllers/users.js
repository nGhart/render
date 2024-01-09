// Import necessary modules and middleware from Express
import { Router } from "express";
import { body } from "express-validator";
import validateFormData from "../helpers/validate_form.js";
import DB from "../models/db.js";
import utils from "../utils/utils.js";

// Create an Express router instance
const router = Router();

//add record
router.post("/addUser/", async function (req, res) {
  try {
    let { contact, user_status } = req.body;

    // Construct the final model data
    let modeldata = {
      contact,
      user_status,
      user_id: utils.randomHex(),
    };

    // already exists.
    let contactCount = await DB.Users.count({
      where: { contact: contact },
    });
    if (contactCount > 0) {
      return res.badRequest(`${contact} already exists.`);
    }

    // Save  record
    let record = await DB.Users.create(modeldata);

    // Respond with success and inserted record
    return res.ok(record);
  } catch (err) {
    // Handle server error
    return res.serverError(err);
  }
});

//get records
//?index @GET /users/index/{fieldname}/{fieldvalue}

router.get(["/users", "/index/:fieldname?/:fieldvalue?"], async (req, res) => {
  try {
    const query = {};
    let queryFilters = [];
    let where = {};
    let replacements = {};
    let fieldName = req.params.fieldname;
    let fieldValue = req.params.fieldvalue;

    if (fieldName) {
      queryFilters.push(DB.filterBy(fieldName, fieldValue));
    }
    let search = req.query.search;
    if (search) {
      let searchFields = DB.Users.searchFields();
      where[DB.op.or] = searchFields;
      replacements.search = `%${search}%`;
    }

    if (queryFilters.length) {
      where[DB.op.and] = queryFilters;
    }
    query.raw = true;
    query.where = where;
    query.replacements = replacements;
    query.attributes = DB.Users.listFields();
    let page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 10;
    let result = await DB.Users.paginate(query, page, limit);
    return res.ok(result);
  } catch (err) {
    return res.serverError(err);
  }
});

//update
router.post(
  "/edit/:recid",

  async (req, res) => {
    try {
      const recid = req.params.recid;
      let modeldata = req.getValidFormData({ includeOptionals: true });
      modeldata["updatedAt"] = utils.dateTimeNow();

      const query = {};
      const where = {};
      where["user_id"] = recid;
      query.raw = true;
      query.where = where;
      query.attributes = DB.Users.editFields();
      let record = await DB.Users.findOne(query);
      if (!record) {
        return res.notFound();
      }
      await DB.Users.update(modeldata, { where: where });
      return res.ok(modeldata);
    } catch (err) {
      return res.serverError(err);
    }
  }
);

//delete record, multiple deletions +","
router.get("/delete/:recid", async (req, res) => {
  try {
    const recid = (req.params.recid || "").split(",");
    const query = {};
    const where = {};
    where["user_id"] = recid;
    query.raw = true;
    query.where = where;
    let records = await DB.Users.findAll(query);
    await DB.Users.destroy(query);
    return res.ok(recid);
  } catch (err) {
    return res.serverError(err);
  }
});

export default router;
