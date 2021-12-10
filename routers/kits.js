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

router.get("/purchase/:userId/:kitId", async (req, res, next) => {
  try {
    const { userId, kitId } = req.params;

    // console.log("userId is", userId);
    // console.log("kitId is", kitId);

    if (isNaN(parseInt(userId)) || isNaN(parseInt(kitId))) {
      return res
        .status(400)
        .send({ message: "User id or kit id is not a number" });
    }

    const specificKitsAndUser = await purchase.findAll({
      where: {
        userId: userId,
      },
      include: {
        model: kit,
      },
      // order: [[purchase, "createdAt", "DESC"]],
    });

    specificKitsAndUser.length === 0
      ? res.status(404).send(`Nothing found`)
      : res
          .status(200)
          .send({ message: "Purchase lists created", specificKitsAndUser });
  } catch (error) {
    console.log("Error", error);
    next(error);
  }
});

module.exports = router;
