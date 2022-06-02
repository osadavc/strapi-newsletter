"use strict";

const settings = require("./settings");
const mailchimp = require("./mailchimp");
const convertkit = require("./convertkit");
const newsletter = require("./newsletter");

module.exports = {
  settings,
  mailchimp,
  newsletter,
  convertkit,
};
