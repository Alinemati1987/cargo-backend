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

    !allCarBrands
      ? res.status(404).send("No car brand defined")
      : res
          .status(200)
          .send({ message: "Request for car brands recieved", allCarBrands });
  } catch (e) {
    res.send("Error is:", e.message);
    next(e);
  }
});

router.get("/:name", async (req, res, next) => {
  try {
    const name = req.params.name;

    const specificBrandList = await carBrand.findAll({
      where: { brandName: name },
      include: {
        model: carModel,
      },
    });

    !specificBrandList
      ? res.status(404).send("No Car Model was found")
      : res
          .status(200)
          .send({ message: "specif list created", specificBrandList });
  } catch (error) {
    console.log("Error", error);
    next(error);
  }
});

module.exports = router;
