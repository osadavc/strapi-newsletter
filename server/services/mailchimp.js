"use strict";

const mailchimp = require("@mailchimp/mailchimp_marketing");

const getPluginStore = () => {
  return strapi.store({
    environment: "",
    type: "plugin",
    name: "strapi-newsletter",
  });
};

module.exports = () => ({
  async checkConnection() {
    try {
      const pluginStore = getPluginStore();
      const config = await pluginStore.get({ key: "settings" });

      if (config.provider != "mailchimp") {
        throw new Error("Provider is not mailchimp");
      }

      mailchimp.setConfig({
        apiKey: config.apiKey,
        server: config.dc,
      });

      const response = await mailchimp.ping.get();

      return response;
    } catch (error) {
      throw new Error(error.toString());
    }
  },
  async subscribeNewUser(email) {
    try {
      const pluginStore = getPluginStore();
      const config = await pluginStore.get({ key: "settings" });

      if (config.provider != "mailchimp") {
        throw new Error("Provider is not mailchimp");
      }

      mailchimp.setConfig({
        apiKey: config.apiKey,
        server: config.dc,
      });

      const response = await mailchimp.lists.addListMember(config.listID, {
        email_address: email,
        status: "subscribed",
      });

      return response;
    } catch (err) {
      console.log(err);
      throw new Error(err.toString());
    }
  },
});
