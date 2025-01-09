const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cookies = require("cookie-parser");

const connectDB = require("./db/db");
const userRoutes = require("./routes/user.routes");

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookies());

connectDB();
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("hello from backend");
});

module.exports = app;
