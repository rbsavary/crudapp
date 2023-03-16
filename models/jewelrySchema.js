const mongoose = require("mongoose");

const jewelrySchema = new mongoose.Schema({
  name: String,
  img: String,
  price: String,
  type: String,
  size: String,
  material: String,
  stones: String,
  weight: String,
});

const Jewelry = mongoose.model("Jewelry", jewelrySchema);
module.exports = Jewelry;
