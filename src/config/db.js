const mongoose = require("mongoose");
require('dotenv').config();

const connectdb = async () => {

  const dburl = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@jobposts.pazpu.mongodb.net/?retryWrites=true&w=majority&appName=JobPosts`
  //mongodb + srv://yaswanthgummadi673:JewfFzSB3I3Bm2U2@jobposts.pazpu.mongodb.net/?retryWrites=true&w=majority&appName=JobPosts
  mongoose.connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then((result) => console.log("mongodb connected "))
    .catch((err) => console.log(err));

};

module.exports = connectdb;

