const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const { ensureAuth } = require("../middleware/auth");

// READ - list orders
router.get("/", ensureAuth, async (req, res) => {
  const orders = await Order.find({ createdBy: req.user._id }).lean();
  res.render("orders", { orders });
});

// CREATE - form
router.get("/add", ensureAuth, (req, res) => res.render("addOrder"));

// CREATE - submit
router.post("/add", ensureAuth, async (req, res) => {
  await Order.create({
    ...req.body,
    createdBy: req.user._id,
  });
  res.redirect("/orders");
});

// EDIT - form
router.get("/edit/:id", ensureAuth, async (req, res) => {
  const order = await Order.findById(req.params.id).lean();
  res.render("editOrder", { order });
});

// UPDATE - submit
router.post("/edit/:id", ensureAuth, async (req, res) => {
  await Order.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/orders");
});

// DELETE
router.post("/delete/:id", ensureAuth, async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.redirect("/orders");
});

module.exports = router;
