const express = require("express");
const PORT = 4000;

const carsRouter = require("./routers/cars");
const app = express();
app.use(express.json());

// // Endpoint for test the app
// app.get("/", (req, res) => {
//   res.send("Hi from express");
// });

app.use("/", carsRouter);
app.listen(PORT, console.log(`Server is listening on port: ${PORT}`));
