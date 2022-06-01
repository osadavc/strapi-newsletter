module.exports = [
  {
    method: "POST",
    path: "/subscribe",
    handler: "newsletter.subscribe",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/settings",
    handler: "settings.getSettings",
  },
  {
    method: "POST",
    path: "/settings",
    handler: "settings.setSettings",
  },
  {
    method: "GET",
    path: "/setup",
    handler: "settings.getSetup",
  },
  {
    method: "GET",
    path: "/mailchimp/ping",
    handler: "mailchimp.checkConnection",
  },
];
