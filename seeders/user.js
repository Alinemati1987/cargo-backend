"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "User 1",
          email: "test@test.com",
          password: "1234",
          address: "Visschersplein 160",
          isSeller: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "User 2",
          email: "a@a.com",
          password: "1234",
          isSeller: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "User 3",
          email: "b@b.com",
          password: "1234",
          isSeller: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "User 4",
          email: "c@c.com",
          password: "1234",
          isSeller: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "User 5",
          email: "d@d.com",
          password: "1234",
          address: "Corroyslaan 300",
          phone: "0653424",
          isSeller: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
