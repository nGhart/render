// Importing Sequelize for database interactions and the database configuration from the application
import Sequelize from "sequelize";
import config from "../config.js";

// Extracting database configuration from the application configuration
const dbConfig = config.database;

// Creating a new Sequelize instance with the extracted database configuration
const sequelize = new Sequelize(
  dbConfig.name,
  dbConfig.username,
  dbConfig.password,
  {
    dialect: dbConfig.type,
    host: dbConfig.host,
    port: dbConfig.port,
    pool: {
      max: 15,
      min: 5,
      idle: 20000,
      evict: 15000,
      acquire: 30000,
    },
    define: {
      freezeTableName: true, // Prevent Sequelize from pluralizing table names
    },
    operatorsAliases: 0, // Disable deprecated operators aliases
  }
);

// Creating a base model class that extends Sequelize.Model
class BaseModel extends Sequelize.Model {
  // Custom method to find and return the value of a specified column
  static async findValue(column, where) {
    const row = await this.findOne({
      attributes: [column],
      where,
    });

    if (row) {
      return row[column];
    }
    return null;
  }

  // Custom method for pagination
  static async paginate(query, page, limit) {
    query.offset = limit * (page - 1);
    query.limit = limit;
    let result = await this.findAndCountAll(query);
    let totalRecords = result.count;
    let records = result.rows;
    let recordCount = records.length;
    let totalPages = Math.ceil(totalRecords / limit);
    let data = {
      totalRecords,
      recordCount,
      totalPages,
      records,
    };
    return data;
  }
}

// Exporting the base model, Sequelize instance, and the sequelize instance for use in other modules
export { BaseModel, Sequelize, sequelize };
