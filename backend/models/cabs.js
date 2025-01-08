const mongoose = require("mongoose");

const cabSchema = new mongoose.Schema({
  name: String,
  plateno: Number,
  price: Number,
});

const cabsModel = mongoose.model("cabs", cabSchema);
module.exports = cabsModel;
