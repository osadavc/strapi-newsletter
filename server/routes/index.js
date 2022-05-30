module.exports = [
  {
    method: "GET",
    path: "/settings",
    handler: "settings.getSettings",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "POST",
    path: "/settings",
    handler: "settings.setSettings",
    config: {
      policies: [],
    },
  },
  {
    method: "GET",
    path: "/mailchimp/ping",
    handler: "mailchimp.checkConnection",
  },
];
