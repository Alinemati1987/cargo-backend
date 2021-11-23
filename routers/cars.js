const express = require("express");
const { Router } = express;
const {
  carBrand,
  carModel,
  kit,
  purchase,
  seller,
  user,
  model_kit,
} = require("../models");

const router = new Router();

// Endpoint for testing the router
// router.get("/", (req, res) => {
//   res.send("Testing car router");
// });

router.get("/", async (req, res, next) => {
  try {
    const allCarBrands = await carBrand.findAll({
      include: { model: carModel, include: { model: kit } },
    });

    res.send(allCarBrands);
  } catch (e) {
    res.send("Error is:", e.message);
    next(e);
  }
});

router.get("/purchase", async (req, res) => {
  try {
    const order = await user.findByPk(6, {
      include: { model: kit },
    });

    res.send(order);
  } catch (error) {
    console.log("Error", error);
  }
});

module.exports = router;
