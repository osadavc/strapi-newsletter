import instance from "./axiosInstance";

export const getSettings = () => instance.get("/settings");

export const setSettings = (data) => instance.post("/settings", data);

export const getSetup = () => instance.get("/setup");

export const checkMailchimpConnection = () => instance.get("/mailchimp/ping");

export const checkConvertKitConnection = () => instance.get("/convertkit/ping");

export const getAllRegisteredUsers = () => instance.get("/newsletter/users");

export const getSentNewsletter = () => instance.get("/newsletter");

export const sendNewsletter = (data) => instance.post("/newsletter", data);
