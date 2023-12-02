const axios = require("axios");
axios.defaults.baseURL = "http://apis.data.go.kr";

const knex = require("knex")(require("../knexfile"));
exports.knex = knex;

const { SNSClient } = require("@aws-sdk/client-sns");

exports.snsClient = new SNSClient({});

exports.lostPotal = require("./lostPotal");
exports.lostDB = require("./lostDB");

exports.foundPotal = require("./foundPotal");
exports.foundDB = require("./foundDB");

exports.notification = require("./notification");
