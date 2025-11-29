const express = require("express");
const { createUserV1, loginUser } = require("../../controllers/userController"); // Import loginUser
const router = express.Router();

router.post("/users", createUserV1);
router.post("/login", loginUser);  

module.exports = router;
