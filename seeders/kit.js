"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "kits",
      [
        {
          kitName: "Kit sample 1",
          imageUrl: "url.kit1",
          kitPrice: 200,
          inStock: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          sellerId: 1,
        },
        {
          kitName: "Kit sample 2",
          imageUrl: "url.kit2",
          kitPrice: 300,
          inStock: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          sellerId: 1,
        },
        {
          kitName: "Kit sample 3",
          imageUrl: "url.kit3",
          kitPrice: 130,
          inStock: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          sellerId: 1,
        },
        {
          kitName: "Kit sample 4",
          imageUrl: "url.kit4",
          kitPrice: 460,
          inStock: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          sellerId: 2,
        },
        {
          kitName: "Kit sample 5",
          imageUrl: "url.kit5",
          kitPrice: 146,
          inStock: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          sellerId: 1,
        },
        {
          kitName: "Kit sample 6",
          imageUrl: "url.kit6",
          kitPrice: 390,
          inStock: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          sellerId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("kits", null, {});
  },
};
