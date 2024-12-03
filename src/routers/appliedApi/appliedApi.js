const express = require("express");
const mongoose = require("mongoose")
const router = express.Router();
const schemaDB = require("../../models/appliedSchema/appliedSchema");

router.post('/applicants', async(req,res) => {
  try{
  const data = req.body;
  const new_data = new schemaDB( { ...data  })
  const result = await new_data.save()
  return res.json({ "success" : true , data : result} )
  } catch (error) {
    return res.status(500).json({ "success": false, "error": error.message });
  }
});

router.get('/get-all-applicants',async(req,res) => {
  try{
    const result = await schemaDB.find();
    return res.json({ "success": true, data: result })
  }catch(err){
    return res.json({success : false, meassage:err.message})
  }
});

router.delete('/delete-applicant/:id',async(req,res) => {
  try{
    await schemaDB.findByIdAndDelete(req.params.id);
    return res.json({"success": true, message:"deleted successfully"})
  }catch(err){
    return res.json({success: false,message:err.message})
  }
})

router.put('/update-applicant/:id',async(req,res) => {
  try{
    const result = await schemaDB.findByIdAndUpdate(req.params.id, req.body,{
      new:true,
      runValidators: true
    })
  } catch (error) {
    return res.status(500).json({ "success": false, "error": error.message });
  }
})

router.get('/get-all-applied-jobs/:id',async(req,res) => {
  try{
    const result = await schemaDB.find({applicantId: req.params.id});
    return res.json({ "success": true, data: result })
  }catch(err){
    return res.json({success : false, meassage:err.message})
  }
})

module.exports = router;