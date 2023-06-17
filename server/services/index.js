"use strict";

const settings = require("./settings");
const mailchimp = require("./mailchimp");
const mailgun = require("./mailgun");
const convertkit = require("./convertkit");
const newsletter = require("./newsletter");

module.exports = {
  settings,
  mailchimp,
  mailgun,
  newsletter,
  convertkit,
};
