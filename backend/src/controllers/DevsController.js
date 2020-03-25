const axios = require('axios');
const Dev = require('../models/Dev');
const { findConnections, sendMessage } = require('./../websocket');

const parserStringAsArray = require('./../utils/parseStringAsArray');

module.exports = {
  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username.trim()}`)
    const { name = login, avatar_url, bio } = apiResponse.data;
    const location = {
      type: 'Point',
      coordinates: [longitude, latitude]
    }

    let dev = await Dev.findOne({ github_username }) || await Dev.create({
      name,
      avatar_url,
      bio,
      github_username,
      techs: parserStringAsArray(techs),
      location
    });

    await dev.save({ location })

    const sendSocketMessageTo = findConnections(
      { latitude, longitude },
      parserStringAsArray(techs)
    )

    sendMessage(sendSocketMessageTo, 'new-dev', dev)

    return res.json(dev);
  },

  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },
}