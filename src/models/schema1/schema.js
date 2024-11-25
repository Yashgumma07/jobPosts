const express = require("express");
const mongoose = require("mongoose");


const jobPostSchema = new mongoose.Schema({
  jobTitle : {
    type : String,
    required : true
  },
  company : {
    type : String,
    required : true
  },
  logo: {
    type: String,
    required: true
  },
  location : {
    type : String,
    required : true
  },
  jobType : {
    type : String,
    required : true
  },
  salaryMin : {
    type : Number
  },
  salaryMax: {
    type: Number
  },
  deadLine: {
    type: Date,
    required: false,
    default: () => new Date(Date.now() + 3*24*60*60*1000)
    
  },
  experience : {
    type : String,
    required : true
  },
  jobMode : {
    type : String,
    required : true
  },
  description : {
    type : String
  }
},
   { timestamps : true }
 );

module.exports = mongoose.model( "JobPost" , jobPostSchema );