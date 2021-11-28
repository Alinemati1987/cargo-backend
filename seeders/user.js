"use strict";
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "User 1",
          email: "test@test.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          address: "Visschersplein 160",
          isSeller: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "User 2- seller",
          email: "a@a.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          isSeller: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "User 3- seller",
          email: "b@b.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          isSeller: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "User 4",
          email: "c@c.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          isSeller: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "User 5",
          email: "d@d.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
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
