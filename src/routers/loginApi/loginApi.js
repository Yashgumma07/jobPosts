const express = require("express");
const mongoose = require("mongoose")
const router = express.Router();
const schemaBD = require("../../models/loginSchema/loginSchema");

router.get('/login', async(req,res) => {
  try{
    const result = await schemaBD.find();
    return res.json({ "success": true, data: result })
  }catch(err){
    return res.json({success : false, meassage:err.message})
  }
})