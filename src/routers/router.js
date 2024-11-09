const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();


const schemaRouter = require("./api1/api");

const jobposts = require("../routers/api1/api")


router.use("/schema", schemaRouter);
router.use("/job", jobposts);



module.exports = router;



