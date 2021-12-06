"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "carModels",
      [
        {
          modelName: "R8",
          imageUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638622741/Carso/AUDI-RB_xxf8o0.png",
          soundUrl:
            "https://res.cloudinary.com/dkdzt4lca/video/upload/v1638575556/Carso/Audi_R8_Engine_Sound_hm6lle.mp3",
          capacity: 5200,
          fuel: 12.9,
          speed: 331,
          acceleration: 3.1,
          carPrice: 281000,
          createdAt: new Date(),
          updatedAt: new Date(),
          carBrandId: 1,
        },
        {
          modelName: "RS3",
          imageUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638622742/Carso/AUDI-RS3_weuhax.png",
          soundUrl:
            "https://res.cloudinary.com/dkdzt4lca/video/upload/v1638575564/Carso/R3_d54kbt.wav",
          capacity: 2500,
          fuel: 9,
          speed: 250,
          acceleration: 3.8,
          carPrice: 92000,
          createdAt: new Date(),
          updatedAt: new Date(),
          carBrandId: 1,
        },
        {
          modelName: "S500",
          imageUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638622738/Carso/MERCEDES-BENZ-S500_tnc1gt.png",
          soundUrl:
            "https://res.cloudinary.com/dkdzt4lca/video/upload/v1638575561/Carso/Benz_c56hdv.wav",
          capacity: 3000,
          fuel: 7.8,
          speed: 250,
          acceleration: 5.1,
          carPrice: 140000,
          createdAt: new Date(),
          updatedAt: new Date(),
          carBrandId: 2,
        },
        {
          modelName: "740li",
          imageUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638622738/Carso/BMW-740LI_tgmlhw.png",
          soundUrl:
            "https://res.cloudinary.com/dkdzt4lca/video/upload/v1638575557/Carso/BMW_fqgifc.mp3",
          capacity: 3000,
          fuel: 8.8,
          speed: 250,
          acceleration: 5.6,
          carPrice: 120000,
          createdAt: new Date(),
          updatedAt: new Date(),
          carBrandId: 3,
        },
        {
          modelName: "Roma",
          imageUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638622741/Carso/FERRARI-ROMA_jy8dxa.png",
          soundUrl:
            "https://res.cloudinary.com/dkdzt4lca/video/upload/v1638575565/Carso/Roma_aculaa.wav",
          capacity: 3900,
          fuel: 10.8,
          speed: 300,
          acceleration: 3.4,
          carPrice: 247000,
          createdAt: new Date(),
          updatedAt: new Date(),
          carBrandId: 6,
        },
        {
          modelName: "Urus",
          imageUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638622746/Carso/LAMBO-URUS_fgdry0.png",
          soundUrl:
            "https://res.cloudinary.com/dkdzt4lca/video/upload/v1638575563/Carso/Urus_tvgyfh.wav",
          capacity: 4000,
          fuel: 12.7,
          speed: 305,
          acceleration: 3.6,
          carPrice: 310000,
          createdAt: new Date(),
          updatedAt: new Date(),
          carBrandId: 4,
        },
        {
          modelName: "Aventador",
          imageUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638622737/Carso/LAMBO-AVENTADOR_y5cr57.png",
          soundUrl:
            "https://res.cloudinary.com/dkdzt4lca/video/upload/v1638575561/Carso/Avatador_nq98fv.wav",
          capacity: 6500,
          fuel: 18,
          speed: 350,
          acceleration: 2.8,
          carPrice: 280000,
          createdAt: new Date(),
          updatedAt: new Date(),
          carBrandId: 4,
        },
        {
          modelName: "Cayyene",
          imageUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638622743/Carso/PORSCHE-KEYYENE_tk0wnl.png",
          soundUrl:
            "https://res.cloudinary.com/dkdzt4lca/video/upload/v1638575560/Carso/cayenne_sound_1_llcdsl.mp3",
          capacity: 3000,
          fuel: 14.1,
          speed: 245,
          acceleration: 6.2,
          carPrice: 442000,
          createdAt: new Date(),
          updatedAt: new Date(),
          carBrandId: 5,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("carModels", null, {});
  },
};
