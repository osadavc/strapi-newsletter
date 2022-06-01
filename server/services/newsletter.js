"use strict";

module.exports = () => ({
  async subscribe() {
    return true;
  },
  async getSubscribedUsers(ctx) {},
  async getAllNewsletter(ctx) {},
  async sendNewsletter(ctx) {},
});
