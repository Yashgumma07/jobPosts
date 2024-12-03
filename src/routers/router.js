const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const schemaRouter = require("./api1/api");
const jobposts = require("../routers/api1/api")

router.use("/schema", schemaRouter);
router.use("/job", jobposts);

const schemaRouter1 = require("./appliedApi/appliedApi");
const applied = require("../routers/appliedApi/appliedApi");

router.use("/applied", schemaRouter1);
router.use("/applicant", applied);

const schemaRouter2 = require("./loginApi/loginApi");
const login = require("../routers/loginApi/loginApi");

router.use("/login", schemaRouter2);
router.use("/login", login);

const schemaRouter3 = require("./registerApi/registerApi");
const register = require("../routers/registerApi/registerApi");

router.use("/register", schemaRouter3);
router.use("/register", register);

module.exports = router;
