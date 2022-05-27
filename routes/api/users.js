const express = require("express");
const { validation, ctrlWrapper } = require("../../middlewares");
const { users: ctrl } = require("../../controllers");
const { joiSchema } = require("../../models/user");

const router = express.Router();

router.post("/signup", validation(joiSchema), ctrlWrapper(ctrl.signup));
router.post("/login", validation(joiSchema), ctrlWrapper(ctrl.login));
module.exports = router;
