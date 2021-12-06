"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "carBrands",
      [
        {
          brandName: "Audi",
          brandLogoUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638575580/Carso/Audi-logo_x9scbk.png",
          buyUrl: "https://www.audi.nl/nl/web/nl/modellen.html",
          ribbonUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638232686/Carso/audi_ribbon_ldo3rv.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brandName: "Mercedes-Benz",
          brandLogoUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638575580/Carso/Benz-logo_xdoqf0.png",
          buyUrl:
            "https://www.mercedes-benz.nl/passengercars.html?csref=mbcom_generic_pc&group=all&subgroup=see-all&view=BODYTYPE#modeltabs",
          ribbonUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638232686/Carso/benz_ribbon_ixpyuv.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brandName: "BMW",
          brandLogoUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638575580/Carso/BMW-logo_fzpzik.png",
          buyUrl:
            "https://www.bmw.nl/nl/all-models.html?tl=grp-wdpl-bcom-mix-mn-.-nscf-.-.-&detail=7_BMW-7-Serie-Sedan",
          ribbonUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638232686/Carso/bmw_ribbon_xh7rxd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brandName: "Lamborghini",
          brandLogoUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638575580/Carso/Lambo-logo_copy_hvtr7i.png",
          buyUrl: "https://www.lamborghini.com/en-en",
          ribbonUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638232686/Carso/lambo_ribbon_zbzj1w.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brandName: "Porsche",
          brandLogoUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638575581/Carso/Porsche-logo_tv6trf.png",
          buyUrl:
            "https://www.porsche.com/uk/accessoriesandservice/owningyourporsche/",
          ribbonUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638232686/Carso/porsche_ribbon_nhjgvv.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brandName: "Ferrari",
          brandLogoUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638575580/Carso/Ferrari-logo_copy_tsdcpw.png",
          buyUrl: "https://www.ferrari.com/en-NL/auto/ferrari-roma",
          ribbonUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638232686/Carso/ferrari_ribbon_mwzjov.jpg",
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
