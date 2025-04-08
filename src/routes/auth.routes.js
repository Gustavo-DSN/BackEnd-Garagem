const express = require("express");
const router = express.Router();
const authApi = require("../auth/auth.api");

router.post("/register", authApi.register);
router.post("/login", authApi.login);

module.exports = router;
