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
};
