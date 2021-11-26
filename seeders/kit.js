"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "kits",
      [
        {
          kitName: "Maxhaust",
          imageUrl:
            "https://www.maxhaust.com/themes/Frontend/Speedbuster/frontend/_public/src/img/animation/Speaker-right-v3.png",
          kitPrice: 540,
          inStock: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          sellerId: 1,
        },
        {
          kitName: "Poker",
          imageUrl:
            "https://www.sound-booster.com/assets/images/6/module-and-soundgenerator-sound-booster-eaa01606.png",
          kitPrice: 1060,
          inStock: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          sellerId: 1,
        },
        {
          kitName: "SPELAB",
          imageUrl:
            "https://www.ubuy.com/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFIOXdmRjBUblMuX0FDX1NMMTIwMF8uanBn.jpg",
          kitPrice: 116,
          inStock: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          sellerId: 1,
        },
        {
          kitName: "Thor 1",
          imageUrl: "https://thor-tuning.com/pres/img/2.png",
          kitPrice: 995,
          inStock: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          sellerId: 2,
        },
        {
          kitName: "Zhao 123",
          imageUrl:
            "https://www.baanvelgen.com/media/catalog/product/cache/1/image/85e4522595efc69f496374d01ef2bf13/w/i/wireless_kit_3_3.jpg",
          kitPrice: 25,
          inStock: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          sellerId: 1,
        },
        {
          kitName: "Thor 2",
          imageUrl:
            "https://www.picclickimg.com/d/l400/pict/203554370066_/THOR-Electronic-Exhaust-2-Loudspeaker-Active-Sound-Booster.jpg",
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
