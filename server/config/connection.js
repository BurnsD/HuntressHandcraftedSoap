const mongoose = require('mongoose');

const uri = process.env.ATLAS_URI;

mongoose.connect(uri || 'mongodb://localhost/huntress-handcrafted', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
