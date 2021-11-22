"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class model_kit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  model_kit.init(
    {
      carModelId: { type: DataTypes.INTEGER, allowNull: false },
      kitId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "model_kit",
    }
  );
  return model_kit;
};
