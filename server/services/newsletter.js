"use strict";

module.exports = ({ strapi }) => ({
  async subscribe(body) {
    if (!body.email) {
      throw new Error("Email is required");
    }

    return await strapi.entityService.create(
      "plugin::strapi-newsletter.subscribed-user",
      {
        data: {
          email: body.email,
        },
      }
    );
  },
  async getSubscribedUsers() {
    return await strapi.entityService.findMany(
      "plugin::strapi-newsletter.subscribed-user"
    );
  },
  async getAllNewsletter() {
    return await strapi.entityService.findMany(
      "plugin::strapi-newsletter.newsletter"
    );
  },
  async sendNewsletter() {},
});
