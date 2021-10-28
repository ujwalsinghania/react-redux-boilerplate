import { request } from "./axiosUtils";
import { LoginReq } from "./../interfaces/apiReqRes";
import { API_URLS } from "../config";

export const loginUser = (data: LoginReq) => {
  return request({
    url: API_URLS.AUTH.LOGIN,
    method: "post",
    data,
    isAuth: false,
  });
};

export const logoutUser = () => {
  return request({
    url: API_URLS.AUTH.LOGOUT,
    method: "post",
    isAuth: true,
  });
};

export const getUser = () => {
  return request({
    url: API_URLS.AUTH.ME,
    method: "get",
    isAuth: true,
  });
};
