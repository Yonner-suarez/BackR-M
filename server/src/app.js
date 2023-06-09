const express = require("express");
const morgan = require("morgan");
const app = express();
const miRouter = require("./routes/routes");
const cors = require("cors");

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    //"http://:localhost:3000"
    "https://rick-and-morty-integration.vercel.app"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/rickandmorty", miRouter);

module.exports = app;
