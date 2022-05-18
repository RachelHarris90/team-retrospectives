const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
  //TODO: Swap around when deploying (process.env.MongoDB first.. )
   //'mongodb://localhost:27017/retroDB' || process.env.MONGODB_URI, 
    process.env.MONGODB_URI || 'mongodb://localhost:27017/retroDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

module.exports = mongoose.connection;