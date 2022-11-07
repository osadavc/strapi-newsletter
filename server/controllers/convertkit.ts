import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  async checkConnection(ctx) {
    try {
      ctx.body = await strapi
        .plugin("strapi-newsletter")
        .service("convertkit")
        .checkConnection();
    } catch (error) {
      ctx.throw(500, error);
    }
  },
});
