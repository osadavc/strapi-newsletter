import { Strapi } from "@strapi/strapi";
import mailchimp from "@mailchimp/mailchimp_marketing";

const getPluginStore = () => {
  return strapi.store({
    environment: "",
    type: "plugin",
    name: "strapi-newsletter",
  });
};

export default ({ strapi }: { strapi: Strapi }) => ({
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
      throw new Error(err);
    }
  },
  async sendNewsletter(body, user) {
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

      const { id: templateId } = await mailchimp.templates.create({
        name: body.subject,
        html: body.body,
      });

      const { id: campaignId } = await mailchimp.campaigns.create({
        type: "regular",
        recipients: {
          list_id: config.listID,
        },
        settings: {
          subject_line: body.subject,
          preview_text: body.subject,
          title: body.subject,
          from_name: user.firstname,
          reply_to: user.email,
          template_id: templateId,
          inline_css: true,
        },
      });

      const response = await mailchimp.campaigns.send(campaignId);

      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
});
