"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "carModels",
      [
        {
          modelName: "R8",
          imageUrl:
            "https://www.pngkit.com/png/full/273-2731532_audi-r8-new-car-image-audi-r8-transparent.png",
          soundUrl:
            "https://res.cloudinary.com/dkdzt4lca/video/upload/v1638264023/Carso/Audi_R8_Engine_Sound_nflmrl.mp3",
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
            "https://w7.pngwing.com/pngs/168/50/png-transparent-audi-rs3-car-audi-sportback-concept-2018-audi-rs-3-audi-compact-car-blue-sedan.png",
          soundUrl:
            "https://res.cloudinary.com/dkdzt4lca/video/upload/v1638264024/Carso/190131_Audi_RS3neu_engineonidleengineoff_zi0398.wav",
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
            "https://purepng.com/public/uploads/large/51506279779c6rntanvyoznezpyppnhohayyxtzb1fw4pyobj8vrqyxl5jgyo0x8wqtg9rcqmi0ddeo5f0xplr20eua2fmf3maooz8epuincm94.png",
          soundUrl: "url.benz.S500sound",
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
            "https://purepng.com/public/uploads/large/purepng.com-bmw-7-series-carcarbmwvehicletransport-961524660822bix0u.png",
          soundUrl: "url.bmw.740lisound",
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
          modelName: "Romma",
          imageUrl:
            "https://media-server2.modenamotorsgmbh.com/14030-home_default/ferrari-roma.jpg",
          soundUrl: "url.rommasound",
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
            "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/menu/09_09/menu_urus.jpg",
          soundUrl: "url.lambo.urussound",
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
          imageUrl: "https://image.pngaaa.com/682/2262682-middle.png",
          soundUrl: "url.lambo.avantadorsound",
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
            "https://toppng.com/uploads/preview/2017-porsche-cayenne-turbo-s-blue-black-porsche-suv-2018-11563985089sbvmfmjzid.png",
          soundUrl:
            "https://res.cloudinary.com/dkdzt4lca/video/upload/v1638264079/Carso/cayenne_sound_1_jhv9an.mp3",
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
