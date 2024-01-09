import { BaseModel, Sequelize, sequelize } from "./basemodel.js";

class Logs extends BaseModel {
  // Static method to initialize the model
  static init() {
    return super.init(
      {
        // Model attributes definition
        log_id: {
          type: Sequelize.STRING,
          primaryKey: true,
          unique: true,
          defaultValue: "DEFAULT",
        },
        msisdn: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: "DEFAULT",
        },
        wam_id: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: "DEFAULT",
        },
        status_id: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: "DEFAULT",
        },
        datesent: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: "DEFAULT",
        },
        status: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: "DEFAULT",
        },
        statusUpdated: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: "DEFAULT",
        },
      },
      {
        sequelize,
        schema: "public",
        tableName: "logs",
        modelName: "logs",
      }
    );
  }

  // Static method to define fields for listing
  static listFields() {
    return [
      "log_id",
      "msisdn",
      "wam_id",
      "status_id",
      "datesent",
      "status",
      "statusUpdated ",
      "createdAt",
      "updatedAt",
    ];
  }

  // Static method to define fields for viewing
  static viewFields() {
    return [
      "log_id",
      "msisdn",
      "wam_id",
      "status_id",
      "datesent",
      "status",
      "statusUpdated ",
      "createdAt",
      "updatedAt",
    ];
  }

  static editFields() {
    return [
      "log_id",
      "logName",
      "msisdn",
      "wam_id",
      "status_id",
      "datesent",
      "status",
      "statusUpdated ",
      "createdAt",
      "updatedAt",
    ];
  }

  static searchFields() {
    return [Sequelize.literal("logName iLIKE :search")];
  }
}

// Initializing the
Logs.init();

export default Logs;
