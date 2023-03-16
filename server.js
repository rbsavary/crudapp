const mongoose = require("mongoose");
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const port = 3000;

//===SEED

const JewelrySeed = require("./models/jewelry.js");
const Jewelry = require("./models/jewelrySchema.js");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

//===SEED
// app.get("/jewelryseed", (req, res) => {
//   Jewelry.create(JewelrySeed).then(() => {
//     res.send(JewelrySeed);
//   });
// });
// Jewelry.collection.drop();
// ===GET

app.get("/", (req, res) => {
  Jewelry.find({}).then((allJewelry) => {
    res.render("index.ejs", { jewelryCollection: allJewelry });
  });
});

//===NEW
app.get("/new", (req, res) => {
  res.render("new.ejs");
});
app.post("/", (req, res) => {
  Jewelry.create(req.body).then(() => {
    res.redirect("/");
  });
});

//==DELETE
app.delete("/:id", (req, res) => {
  Jewelry.findByIdAndRemove(req.params.id).then(() => {
    res.redirect("/");
  });
});

// //==SHOW

app.get("/:id", (req, res) => {
  Jewelry.findById(req.params.id).then((currentJewelry) => {
    res.render("show.ejs", {
      Jewelry: currentJewelry,
    });
  });
});

app.get("/:id/edit", (req, res) => {
  Jewelry.findById(req.params.id).then((currentJewelry) => {
    res.render("edit.ejs", { Jewelry: currentJewelry });
  });
});

app.put("/:id", (req, res) => {
  Jewelry.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
    res.redirect("/");
  });
});
app.listen(port, () => {
  console.log(`Pretty Adornments app listening on port: ${port}`);
});
mongoose.connect("mongodb://127.0.0.1:27017/jewelry");
