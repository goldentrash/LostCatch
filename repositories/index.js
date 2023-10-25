const axios = require("axios");
axios.defaults.baseURL = "http://apis.data.go.kr";

const knex = require("knex")(require("../knexfile"));
exports.knex = knex;

exports.lostPotal = require("./lostPotal");
exports.lostDB = require("./lostDB");

exports.foundPotal = require("./foundPotal");
exports.foundDB = require("./foundDB");
