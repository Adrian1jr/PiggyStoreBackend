const express = require("express");
const router = express.Router();

const { login, register } = require("../controllers/user");

router.get("/", login);
router.post("/", register);

module.exports = router;
