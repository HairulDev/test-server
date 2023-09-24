const router = require("express").Router();
const adminController = require("#controllers/admin.controller");

router.post("/me", adminController.viewAccountByEmail);
module.exports = router;