"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class carBrand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      carBrand.hasMany(models.carModel, { foreignKey: "carBrandId" });
    }
  }
  carBrand.init(
    {
      brandName: { type: DataTypes.STRING, allowNull: false, unique: true },
      brandLogoUrl: { type: DataTypes.STRING, allowNull: false },
      buyUrl: { type: DataTypes.STRING, allowNull: false, unique: true },
      ribbonUrl: { type: DataTypes.STRING, allowNull: false, unique: true },
    },
    {
      sequelize,
      modelName: "carBrand",
    }
  );
  return carBrand;
};
