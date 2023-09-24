const express = require("express");
const router = express.Router();

const authRouter = require("./auth.route");
const adminRouter = require("./admin.route");

router.use("/", authRouter);
router.use("/", adminRouter);

module.exports = router;
