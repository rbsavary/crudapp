const mongoose = require("mongoose");

const jewelrySchema = new mongoose.Schema({
  name: String,
  img: String,
  price: Number,
  type: String,
  size: String,
  material: [String],
  stones: [
    {
      type: String,
      quantity: Number,
      size: String,
    },
  ],
  weight: String,
});

const Jewelry = mongoose.model("Jewelry", jewelrySchema);
module.exports = Jewelry;
