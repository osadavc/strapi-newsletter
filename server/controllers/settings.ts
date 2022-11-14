import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  async getSettings(ctx) {
    ctx.body = await strapi
      .plugin("strapi-newsletter")
      .service("settings")
      .getSettings();
  },
  async setSettings(ctx) {
    ctx.body = await strapi
      .plugin("strapi-newsletter")
      .service("settings")
      .setSettings(ctx.request.body);
  },
  async getSetup(ctx) {
    ctx.body = await strapi
      .plugin("strapi-newsletter")
      .service("settings")
      .getSetup();
  },
});
