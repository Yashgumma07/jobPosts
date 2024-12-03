const express = require("express");
const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  confirmPassword: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Applied", registerSchema);