export default [
  {
    method: "POST",
    path: "/newsletter/subscribe",
    handler: "newsletter.subscribe",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/newsletter/users",
    handler: "newsletter.getSubscribedUsers",
  },
  {
    method: "GET",
    path: "/newsletter",
    handler: "newsletter.getAllNewsletter",
  },
  {
    method: "POST",
    path: "/newsletter",
    handler: "newsletter.sendNewsletter",
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
  {
    method: "GET",
    path: "/convertkit/ping",
    handler: "convertkit.checkConnection",
  },
];
