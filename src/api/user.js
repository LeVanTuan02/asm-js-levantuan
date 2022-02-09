import instance from "./config";

export const register = (user) => {
    const url = "/register";
    return instance.post(url, user);
};

export const login = (user) => {
    const url = "/login";
    return instance.post(url, user);
};