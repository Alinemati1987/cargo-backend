const express = require("express");
const PORT = 4000 || process.env.PORT;

const corsMiddleware = require("cors");
const loggerMiddleWare = require("morgan");
const authMiddleWare = require("./auth/middleware");

const authRouter = require("./routers/auth");
const carsRouter = require("./routers/cars");

const app = express();
app.use(express.json());
app.use(corsMiddleware());
app.use(loggerMiddleWare("dev"));

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

// POST endpoint which requires a token for testing purposes, can be removed
app.post("/authorized_post_request", authMiddleWare, (req, res) => {
  // accessing user that was added to req by the auth middleware
  const user = req.user;
  // don't send back the password hash
  delete user.dataValues["password"];

  res.json({
    youPosted: {
      ...req.body,
    },
    userFoundWithToken: {
      ...user.dataValues,
    },
  });
});

// // Endpoint for test the app
// app.get("/", (req, res) => {
//   res.send("Hi from express");
// });

app.use("/", authRouter);
app.use("/", carsRouter);

app.listen(PORT, console.log(`Server is listening on port: ${PORT}`));
