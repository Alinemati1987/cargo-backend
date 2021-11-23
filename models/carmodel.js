"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class carModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      carModel.belongsTo(models.carBrand, { foreignKey: "carBrandId" });
      carModel.belongsToMany(models.kit, {
        through: "model_kits",
        foreignKey: "carModelId",
      });
    }
  }
  carModel.init(
    {
      modelName: { type: DataTypes.STRING, allowNull: false, unique: true },
      imageUrl: { type: DataTypes.STRING, allowNull: false },
      soundUrl: { type: DataTypes.STRING, allowNull: false },
      capacity: DataTypes.STRING,
      fuel: DataTypes.FLOAT,
      acceleration: DataTypes.FLOAT,
      carPrice: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "carModel",
    }
  );
  return carModel;
};
