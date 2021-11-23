"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "purchases",
      [
        {
          purchaseNo: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          kitId: 6,
        },
        {
          purchaseNo: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          kitId: 3,
        },
        {
          purchaseNo: 111,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 4,
          kitId: 2,
        },
        {
          purchaseNo: 1111,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 4,
          kitId: 1,
        },
        {
          purchaseNo: 11111,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          kitId: 6,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("purchases", null, {});
  },
};
