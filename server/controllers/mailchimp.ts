import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  async checkConnection(ctx) {
    try {
      ctx.body = await strapi
        .plugin("strapi-newsletter")
        .service("mailchimp")
        .checkConnection();
    } catch (error) {
      ctx.throw(500, error);
    }
  },
});
