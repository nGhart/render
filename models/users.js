// Importing the base model, Sequelize, and the sequelize instance from the basemodel module
import { BaseModel, Sequelize, sequelize } from "./basemodel.js";

// Defining the class
class Users extends BaseModel {
  // Static method to initialize the model
  static init() {
    return super.init(
      {
        // Model attributes definition
        user_id: {
          type: Sequelize.STRING,
          primaryKey: true,
          unique: true,
          defaultValue: "DEFAULT",
        },
        contact: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
          defaultValue: "DEFAULT",
        },
        user_status: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "DEFAULT",
        },
      },
      {
        sequelize,
        schema: "public",
        tableName: "users",
        modelName: "users",
      }
    );
  }

  // Static method to define fields for listing
  static listFields() {
    return ["user_id", "contact", "user_status", "createdAt", "updatedAt"];
  }

  // Static method to define fields for viewing
  static viewFields() {
    return ["user_id", "contact", "user_status", "createdAt", "updatedAt"];
  }

  static editFields() {
    return ["user_id", "contact", "user_status", "createdAt", "updatedAt"];
  }

  static searchFields() {
    return [
      Sequelize.literal("user_status iLIKE :search"),
      Sequelize.literal("contact iLIKE :search"),
    ];
  }
}

// Initializing
Users.init();

// Exporting
export default Users;
