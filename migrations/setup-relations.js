"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("sellers", "userId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("kits", "sellerId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {
        model: "sellers",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("carModels", "carBrandId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {
        model: "carBrands",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("sellers", "userId");
    await queryInterface.removeColumn("kits", "sellerId");
    await queryInterface.removeColumn("carModels", "carBrandId");
  },
};
