const express = require("express");
const mongoose = require("mongoose")
const router = express.Router();
const schemaDB = require("../../models/schema1/schema");


router.post('/job-post', async(req,res) => {
  try{
  const data = req.body;
  const new_data = new schemaDB( { ...data  })
  const result = await new_data.save()
  return res.json({ "success" : true , data : result} )
}catch(err){
  return res.json({ success : false, message : err.message})
}
})

router.get('/get-all-job-posts',async(req,res) => {
  try{
    const result = await schemaDB.find();
    return res.json({ "success": true, data: result })
  }catch(err){
    return res.json({success : false, meassage:err.message})
  }
})

router.delete('/delete-job-post/:id',async(req,res) => {
  try{
    await schemaDB.findByIdAndDelete(req.params.id);
    return res.json({"success": true, message:"deleted successfully"})
  }catch(err){
    return res.json({success: false,message:err.message})
  }
})

router.put('/update-job-post/:id',async(req,res) => {
  try{
    const result = await schemaDB.findByIdAndUpdate(req.params.id, req.body,{
      new:true,
      runValidators: true
    })
  }catch(err){
    return res.json({success: false, message:err.message})
  }
})





module.exports = router;