import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  async subscribe(ctx) {
    try {
      ctx.body = await strapi
        .plugin("strapi-newsletter")
        .service("newsletter")
        .subscribe(ctx.request.body);
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  async getSubscribedUsers(ctx) {
    try {
      ctx.body = await strapi
        .plugin("strapi-newsletter")
        .service("newsletter")
        .getSubscribedUsers();
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  async getAllNewsletter(ctx) {
    try {
      ctx.body = await strapi
        .plugin("strapi-newsletter")
        .service("newsletter")
        .getAllNewsletter();
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  async sendNewsletter(ctx) {
    try {
      ctx.body = await strapi
        .plugin("strapi-newsletter")
        .service("newsletter")
        .sendNewsletter(ctx.request.body, ctx.state.user);
    } catch (error) {
      ctx.throw(500, error);
    }
  },
});
