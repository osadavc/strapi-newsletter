"use strict";

module.exports = {
  async subscribe(ctx) {
    try {
      ctx.body = await strapi
        .plugin("strapi-newsletter")
        .service("newsletter")
        .subscribe();
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
        .sendNewsletter();
    } catch (error) {
      ctx.throw(500, error);
    }
  },
};