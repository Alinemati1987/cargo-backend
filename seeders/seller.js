"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "sellers",
      [
        {
          companyName: "Sample company one",
          address: "Amsterdamweg 657",
          phone: "06534243",
          logoUrl:
            "https://png.pngtree.com/template/20191029/ourmid/pngtree-awesome-letter-s-logo-image_324299.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
        },
        {
          companyName: "Thor",
          address: "Cambridgelaan 200",
          phone: "065342434",
          logoUrl:
            "https://www.pngitem.com/pimgs/m/485-4852378_sample-logo-png-transparent-png.png",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("sellers", null, {});
  },
};
