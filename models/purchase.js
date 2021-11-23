"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class purchase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      purchase.belongsTo(models.user);
      purchase.belongsTo(models.kit);
    }
  }
  purchase.init(
    {
      purchaseNo: { type: DataTypes.INTEGER, allowNull: false, unique: true },
      userId: { type: DataTypes.INTEGER, allowNull: false },
      kitId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "purchase",
    }
  );
  return purchase;
};
