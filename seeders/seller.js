"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "sellers",
      [
        {
          companyName: "Sample company one",
          address: "Cambridgelaan 200",
          phone: "065342434",
          logoUrl: "url.companyOne",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          companyName: "Sample company two",
          address: "Amsterdamweg 657",
          phone: "06534243",
          logoUrl: "url.companyTwo",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("sellers", null, {});
  },
};
