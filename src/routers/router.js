const express = require("express");
const router = express.Router();

// Import routers
const schemaRouter = require("./api1/api");
const appliedRouter = require("./appliedApi/appliedApi");
const loginRouter = require("./loginApi/loginApi");
const registerRouter = require("./registerApi/registerApi");

// Use routers
router.use("/schema", schemaRouter);
router.use("/applied", appliedRouter);
router.use("/login", loginRouter);
router.use("/register", registerRouter);

module.exports = router;
