const express = require("express");
const user = require("../models/user.model.js");

const {
  getUsers,
  registerUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller.js");
const router = express.Router();

router.get("/", getUsers);
router.post("/", registerUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;