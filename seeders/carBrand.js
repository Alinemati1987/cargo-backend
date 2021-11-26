"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "carBrands",
      [
        {
          brandName: "Audi",
          brandLogoUrl:
            "https://www.carlogos.org/logo/Audi-logo-2009-1920x1080.png",
          buyUrl: "https://www.audi.nl/nl/web/nl/modellen.html",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brandName: "Benz",
          brandLogoUrl:
            "https://www.carlogos.org/logo/Mercedes-Benz-logo-2011-1920x1080.png",
          buyUrl:
            "https://www.mercedes-benz.nl/passengercars.html?csref=mbcom_generic_pc&group=all&subgroup=see-all&view=BODYTYPE#modeltabs",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brandName: "BMW",
          brandLogoUrl:
            "https://www.carlogos.org/car-logos/bmw-logo-2020-blue-white.png",
          buyUrl:
            "https://www.bmw.nl/nl/all-models.html?tl=grp-wdpl-bcom-mix-mn-.-nscf-.-.-&detail=7_BMW-7-Serie-Sedan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brandName: "Lamborghini",
          brandLogoUrl:
            "https://www.carlogos.org/car-logos/lamborghini-logo-1000x1100.png",
          buyUrl: "https://www.lamborghini.com/en-en",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brandName: "Porsche",
          brandLogoUrl:
            "https://www.carlogos.org/car-logos/porsche-logo-2100x1100.png",
          buyUrl:
            "https://www.porsche.com/uk/accessoriesandservice/owningyourporsche/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brandName: "Ferrari",
          brandLogoUrl:
            "https://www.carlogos.org/car-logos/ferrari-logo-750x1100.png",
          buyUrl: "https://www.ferrari.com/en-NL/auto/ferrari-roma",
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
