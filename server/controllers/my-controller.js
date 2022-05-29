'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('strapi-newsletter')
      .service('myService')
      .getWelcomeMessage();
  },
};
