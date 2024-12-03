const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const schemaBD = require("../../models/RegisterSchema/registerSchema");

router.get('/register', async(req,res) => {
  try{
    const result = await schemaBD.find();
    return res.json({ "success": true, data: result })
  }catch(err){
    return res.json({success : false, meassage:err.message})
  }
})

router.post('/add-user', async(req,res) => {
  try{
  const data = req.body;
  const new_data = new schemaBD( { ...data  })
  const result = await new_data.save()
  return res.json({ "success" : true , data : result} )
}catch(err){
  return res.json({ success : false, message : err.message})
}
})