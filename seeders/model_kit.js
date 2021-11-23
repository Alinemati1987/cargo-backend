"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "model_kits",
      [
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          carModelId: 1,
          kitId: 2,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          carModelId: 1,
          kitId: 3,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          carModelId: 1,
          kitId: 6,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          carModelId: 2,
          kitId: 3,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          carModelId: 2,
          kitId: 1,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          carModelId: 3,
          kitId: 4,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          carModelId: 3,
          kitId: 5,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          carModelId: 4,
          kitId: 1,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          carModelId: 4,
          kitId: 4,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          carModelId: 4,
          kitId: 5,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          carModelId: 5,
          kitId: 6,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          carModelId: 6,
          kitId: 6,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          carModelId: 7,
          kitId: 3,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          carModelId: 8,
          kitId: 6,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          carModelId: 8,
          kitId: 5,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("model_kits", null, {});
  },
};
