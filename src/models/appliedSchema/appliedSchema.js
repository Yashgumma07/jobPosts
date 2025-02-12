const express = require("express");
const mongoose = require("mongoose");

const appliedSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  qualification: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  resume: {
    type: String,
    required: true
  },
  shortlisted: {
    type: Boolean,
    default: false
  },
  jobPostId: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Applied", appliedSchema);