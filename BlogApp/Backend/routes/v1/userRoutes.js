const express = require("express");
const { createUserV1 } = require("../../controllers/userController");
const router = express.Router();

router.post("/users", createUserV1);

module.exports = router;
