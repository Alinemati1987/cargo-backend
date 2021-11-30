"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("carBrands", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      brandName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      brandLogoUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      buyUrl: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      ribbonUrl: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("carBrands");
  },
};
