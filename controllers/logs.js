import Subscribers from "../models/logs.js";
import validateFormData from "../helpers/validate_form.js";
import DB from "../models/db.js";
import config from "../config.js";
import axios from "axios";
import { body } from "express-validator";
import { Router } from "express";
import { sequelize } from "../models/basemodel.js";

import utils from "../utils/utils.js";
const router = Router();
const dbConfig = config.whatsApp;

router.post("/add/", async function (req, res) {
  try {
    let { msisdn, wam_id, status_id, datesent, status, statusUpdated } =
      req.body;

    // Construct the final model data
    let modeldata = {
      msisdn,
      wam_id,
      status_id,
      datesent,
      statusUpdated,
      status,
      log_id: utils.randomHex(),
    };

    // already exists.
    let statusIdCount = await DB.Logs.count({
      where: { status_id: status_id },
    });
    if (statusIdCount > 0) {
      return res.badRequest(`${status_id} already exists.`);
    }

    // Save  record
    let record = await DB.Logs.create(modeldata);

    // Respond with success and inserted record
    return res.ok(record);
  } catch (err) {
    // Handle server error
    console.log(err);
    return res.serverError(err);
  }
});

//edit
router.post("/edit/:recid", async (req, res) => {
  try {
    const recid = req.params.recid;
    let modeldata = req.getValidFormData({ includeOptionals: true });
    modeldata["updatedAt"] = utils.dateTimeNow();

    const query = {};
    const where = {};
    where["log_id"] = recid;
    query.raw = true;
    query.where = where;
    query.attributes = DB.Logs.editFields();
    let record = await DB.Logs.findOne(query);
    if (!record) {
      return res.notFound();
    }
    await DB.Logs.update(modeldata, { where: where });
    return res.ok(modeldata);
  } catch (err) {
    return res.serverError(err);
  }
});

export default router;
