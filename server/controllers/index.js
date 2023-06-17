"use strict";

const settings = require("./settings");
const mailchimp = require("./mailchimp");
const mailgun = require("./mailgun");
const newsletter = require("./newsletter");
const convertkit = require("./convertkit");

module.exports = {
  settings,
  mailchimp,
  mailgun,
  newsletter,
  convertkit,
};
