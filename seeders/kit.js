"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "kits",
      [
        {
          kitName: "Maxhaust",
          imageUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638575608/Carso/Maxhaust_zopimk.png",
          kitPrice: 540,
          inStock: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          sellerId: 1,
        },
        {
          kitName: "Poker",
          imageUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638575608/Carso/kit_excwfd.png",
          kitPrice: 1060,
          inStock: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          sellerId: 1,
        },
        {
          kitName: "SPELAB",
          imageUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638575609/Carso/Untitled-2_q2q3qe.png",
          kitPrice: 116,
          inStock: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          sellerId: 1,
        },
        {
          kitName: "Thor 1",
          imageUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638575610/Carso/Thor1_yac4x5.png",
          kitPrice: 995,
          inStock: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          sellerId: 2,
        },
        {
          kitName: "Zhao 123",
          imageUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638575610/Carso/Untitled-1_zelm4w.png",
          kitPrice: 25,
          inStock: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          sellerId: 1,
        },
        {
          kitName: "Thor 2",
          imageUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638575609/Carso/Thor2_ws6eez.png",
          kitPrice: 1445,
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
