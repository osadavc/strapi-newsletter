import { Strapi } from "@strapi/strapi";

const getPluginStore = () => {
  return strapi.store({
    environment: "",
    type: "plugin",
    name: "strapi-newsletter",
  });
};

export default ({ strapi }: { strapi: Strapi }) => ({
  async subscribe(initialBody) {
    let body = initialBody;

    if (typeof body === "string") {
      body = JSON.parse(initialBody);
    }

    if (!body.email) {
      throw new Error("Email is required");
    }

    const { provider } = await getPluginStore().get({ key: "settings" });

    switch (provider) {
      case "mailchimp": {
        await strapi
          .plugin("strapi-newsletter")
          .service("mailchimp")
          .subscribeNewUser(body.email);
      }
    }

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
  async sendNewsletter(body, user) {
    if (!body.body || !body.subject) {
      throw new Error("Body and/or Subject are required");
    }

    const { provider } = await getPluginStore().get({ key: "settings" });

    switch (provider) {
      case "mailchimp": {
        await strapi
          .plugin("strapi-newsletter")
          .service("mailchimp")
          .sendNewsletter(body, user);
      }
    }

    return await strapi.entityService.create(
      "plugin::strapi-newsletter.newsletter",
      {
        data: {
          subject: body.subject,
        },
      }
    );
  },
});
