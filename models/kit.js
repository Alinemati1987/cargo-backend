"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class kit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      kit.belongsToMany(models.user, {
        through: "purchases",
        foreignKey: "kitId",
      });
      kit.belongsTo(models.seller, { foreignKey: "sellerId" });
      kit.belongsToMany(models.carModel, {
        through: "model_kits",
        foreignKey: "kitId",
      });
    }
  }
  kit.init(
    {
      kitName: { type: DataTypes.STRING, allowNull: false },
      kitPrice: { type: DataTypes.INTEGER, allowNull: false },
      inStock: { type: DataTypes.BOOLEAN, defaultValue: true },
      imageUrl: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "kit",
    }
  );
  return kit;
};
