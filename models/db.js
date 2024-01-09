// Importing Sequelize and the sequelize instance from the basemodel module
import { Sequelize, sequelize } from "./basemodel.js";

// Override timezone formatting for Sequelize DATE type
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
  return this._applyTimezone(date, options).format("YYYY-MM-DD HH:mm:ss");
};

// Importing models
import Users from "./users.js";
import Logs from "./logs.js";

// Aliasing Sequelize.Op for convenience
const op = Sequelize.Op;

// Aliasing Sequelize.literal for raw expressions
const raw = Sequelize.literal;

// Function for creating a Sequelize WHERE clause using raw expressions
const filterBy = function (expression, value) {
  return sequelize.where(raw(expression), value);
};

// Function for executing a raw SQL query
function rawQuery(queryText, options) {
  return sequelize.query(queryText, options);
}

// Function for executing a raw SQL query and returning a list of records
async function rawQueryList(queryText, queryParams) {
  const records = await rawQuery(queryText, {
    replacements: queryParams,
    type: Sequelize.QueryTypes.SELECT,
  });
  return records;
}

// Function for executing a raw SQL query and returning a single record or null
async function rawQueryOne(queryText, queryParams) {
  const records = await rawQueryList(queryText, queryParams);
  return records[0] || null;
}

// Function for executing a raw SQL query and returning a single value or null
async function rawQueryValue(queryText, queryParams) {
  const record = await rawQueryOne(queryText, queryParams);
  if (record) {
    return Object.values(record)[0];
  }
  return null;
}

// Function to get the ORDER BY clause based on request parameters or provided defaults
function getOrderBy(req, sortField = null, sortType = "desc") {
  const orderBy = req.query.orderby || sortField;
  const orderType = req.query.ordertype || sortType;
  if (orderBy) {
    let order = raw(`${orderBy} ${orderType}`);
    return [[order]];
  }
  return null;
}

// Exporting the sequelize instance, Sequelize.Op, raw expression utility, raw query functions, and models
export default {
  sequelize,
  op,
  filterBy,
  raw,
  rawQuery,
  rawQueryList,
  rawQueryOne,
  rawQueryValue,
  getOrderBy,
  Users,
  Logs,
};
