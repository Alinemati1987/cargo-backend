"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "carBrands",
      [
        {
          brandName: "Audi",
          brandLogoUrl: "url.audi.logo",
          buyUrl: "url.audi.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brandName: "Benz",
          brandLogoUrl: "url.Benz.logo",
          buyUrl: "url.Benz.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brandName: "BMW",
          brandLogoUrl: "url.BMW.logo",
          buyUrl: "url.BMW.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brandName: "Lamborghini",
          brandLogoUrl: "url.Lamborghini.logo",
          buyUrl: "url.Lamborghini.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brandName: "Porsche",
          brandLogoUrl: "url.Porsche.logo",
          buyUrl: "url.Porsche.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("carBrands", null, {});
  },
};
