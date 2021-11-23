"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class seller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      seller.belongsTo(models.user, { foreignKey: "userId" });
      seller.hasMany(models.kit, { foreignKey: "sellerId" });
    }
  }
  seller.init(
    {
      companyName: { type: DataTypes.STRING, unique: true, allowNull: false },
      address: { type: DataTypes.STRING, unique: true, allowNull: false },
      phone: { type: DataTypes.STRING, unique: true, allowNull: false },
      logoUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "seller",
    }
  );
  return seller;
};
