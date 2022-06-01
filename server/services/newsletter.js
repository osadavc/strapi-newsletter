"use strict";

const getPluginStore = () => {
  return strapi.store({
    environment: "",
    type: "plugin",
    name: "strapi-newsletter",
  });
};

module.exports = ({ strapi }) => ({
  async subscribe(body) {
    if (!body.email) {
      throw new Error("Email is required");
    }

    const provider = (await getPluginStore().get({ key: "settings" })).provider;

    return await strapi.entityService.create(
      "plugin::strapi-newsletter.subscribed-user",
      {
        data: {
          email: body.email,
          provider: provider,
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
