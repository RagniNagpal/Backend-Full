const express = require("express");
const { createUserV2 } = require("../../controllers/v2/userController");

const router = express.Router();

router.post("/users", createUserV2);

module.exports = router;
