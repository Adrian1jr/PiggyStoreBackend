require("dotenv").config();

const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/bd");

const app = express();
app.use(cors());

const port = process.env.PORT || 3001;
app.listen((port) => {
  console.log("backend corriendo");
});

dbConnect();