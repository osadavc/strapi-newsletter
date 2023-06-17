"use strict";

const formData = require("form-data");
const Mailgun = require("mailgun.js");

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

      if (config.provider != "mailgun") {
        throw new Error("Provider is not mailgun");
      }
      if (!config.email) {
        throw new Error("Email for mailing list not defined");
      }
      const mailgun = new Mailgun(formData);
      const mg = mailgun.client({ username: "api", key: config.apiKey });

      const data = await mg.domains.get();

      return data;
    } catch (error) {
      throw new Error(error.toString());
    }
  },
  async subscribeNewUser(email) {
    try {
      const pluginStore = getPluginStore();
      const config = await pluginStore.get({ key: "settings" });

      if (config.provider != "mailgun") {
        throw new Error("Provider is not mailgun");
      }

      if (!config.email) {
        throw new Error("Email for mailing list not defined");
      }
      const mailgun = new Mailgun(formData);
      const mg = mailgun.client({ username: "api", key: config.apiKey });

      const data = mg.lists.members.createMember(config.email, {
        address: email,
      });

      return data;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  },
  async sendNewsletter(body, _) {
    try {
      const pluginStore = getPluginStore();
      const config = await pluginStore.get({ key: "settings" });

      if (config.provider != "mailgun") {
        throw new Error("Provider is not mailgun");
      }

      if (!config.email) {
        throw new Error("Email for mailing list not defined");
      }
      if (!config.emailFrom) {
        throw new Error("Email from for mailing list not defined");
      }
      if (!config.domain) {
        throw new Error("Email Domain for mailing list not defined");
      }
      const mailgun = new Mailgun(formData);
      const mg = mailgun.client({ username: "api", key: config.apiKey });

      const data = await mg.messages.create(config.domain, {
        from: config.emailFrom,
        to: [config.email],
        subject: body.subject,
        html: body.body,
      });

      return data;
    } catch (error) {
      throw new Error(error);
    }
  },
});
