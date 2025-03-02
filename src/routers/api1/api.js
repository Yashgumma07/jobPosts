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

router.post('/get-search-job-posts', async (req, res) => {
  const { jobTitle, salaryMin, salaryMax, jobType, jobMode, role, experience } = req.body;

  try {
    // Construct dynamic filter conditions
    const filterConditions = {
      $or: [
        { jobTitle: { $regex: jobTitle || '', $options: 'i' } }, // Match jobTitle
        { company: { $regex: jobTitle || '', $options: 'i' } },  // Match company
      ],
    };

    // Initialize salaryMin and salaryMax if they don't exist
    if (salaryMin) {
      if (!filterConditions.salaryMin) {
        filterConditions.salaryMin = {};
      }
      filterConditions.salaryMin.$gte = parseFloat(salaryMin); // Greater than or equal to salaryMin
    }

    if (salaryMax) {
      if (!filterConditions.salaryMax) {
        filterConditions.salaryMax = {};
      }
      filterConditions.salaryMax.$lte = parseFloat(salaryMax); // Less than or equal to salaryMax
    }

    // Add jobType filter
    if (jobType) {
      filterConditions.jobType = jobType;
    }

    // Add workMode filter
    if (jobMode) {
      filterConditions.jobMode = jobMode;
    }

    // Add industryType filter
    if (role) {
      filterConditions.role = role;
    }

    // Add experience filter
    if (experience) {
      if (!filterConditions.experience) {
        filterConditions.experience = {};
      }
      filterConditions.experience.$lte = parseInt(experience); // Less than or equal to experience
    }

    // Perform the query with the constructed filters
    const result = await schemaDB.find(filterConditions);

    return res.json({ success: true, data: result });
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
});


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
    return res.json({ "success": true, data: result })
  }catch(err){
    return res.json({success: false, message:err.message})
  }
})

router.get('/get-saved-job-posts/:id',async(req,res) => {
  try{
    const result = await schemaDB.find({applicantId: req.params.id});
    return res.json({ "success": true, data: result })
  }catch(err){
    return res.json({success : false, meassage:err.message})
  }
})

router.get('get-applied-job-posts/:id',async(req,res) => {
  try{
    const result = await schemaDB.findById(req.params.id);
    return res.json({ "success": true, data: result })
  }catch(err){
    return res.json({success : false, meassage:err.message})
  }
})

router.get('/count-job-posts',async(req,res) => {
  try{
    const result = await schemaDB.countDocuments();
    return res.json({ "success": true, data: result })
  }catch(err){
    return res.json({success : false, meassage:err.message})
  }
})



module.exports = router;