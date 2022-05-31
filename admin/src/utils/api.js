import instance from "./axiosInstance";

export const getSettings = () => instance.get("/settings");

export const setSettings = (data) => instance.post("/settings", data);

export const getSetup = () => instance.get("/setup");

export const checkMailchimpConnection = () => instance.get("/mailchimp/ping");
