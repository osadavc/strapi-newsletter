"use strict";

module.exports = {
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
};
