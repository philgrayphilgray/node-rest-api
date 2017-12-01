const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(201).json({
    message: "Orders were fetched"
  });
});

router.post("/:orderId", (req, res, next) => {
  res.status(201).json({
    message: "Order dtails",
    orderId: req.params.orderId
  });
});
router.delete("/:orderId", (req, res, next) => {
  res.status(201).json({
    message: "Order deleted",
    orderId: req.params.orderId
  });
});

module.exports = router;
