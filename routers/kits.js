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
//   res.send("Testing kit router");
// });

router.get("/:modelName/:carModelId", async (req, res, next) => {
  try {
    const { modelName, carModelId } = req.params;

    if (isNaN(parseInt(carModelId))) {
      return res.status(400).send({ message: "Car id is not a number" });
    }

    const specificKitsForCarModel = await model_kit.findAll({
      where: { carModelId: carModelId },
      include: {
        model: kit,
        include: { model: seller },
      },
      order: [[kit, "createdAt", "DESC"]],
    });

    specificKitsForCarModel.length === 0
      ? res.status(404).send(`No kit for ${modelName} is defined`)
      : res
          .status(200)
          .send({ message: "Kit lists created", specificKitsForCarModel });
  } catch (error) {
    console.log("Error", error);
    next(error);
  }
});

module.exports = router;
