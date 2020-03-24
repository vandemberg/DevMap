const mongoose = require('mongoose');
const PointType = require('./../utils/PointType');

const DevSchema = new mongoose.Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  location: {
    type: PointType,
    index: '2dsphere',
  },
});

module.exports = mongoose.model('Dev', DevSchema);