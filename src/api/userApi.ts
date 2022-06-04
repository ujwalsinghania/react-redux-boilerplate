import { RequestTypes } from "./../interfaces/common";
import { fetchData } from "./axiosUtils";
import { LoginReq } from "../interfaces/apiResponse";
import { AppDispatch } from "../redux/store";
import { API_URLS } from "../config/apiUrls";
import Cookies from "js-cookie";

// return a promise is some redux action has to be performed
export const loginUser = (data: LoginReq): any => (dispatch: AppDispatch) => {
  return new Promise((resolve, reject) => {
    fetchData({
      url: API_URLS.AUTH.LOGIN,
      method: RequestTypes.POST,
      data,
    })
      .then((res: any) => {
        Cookies.set("token", res.token, { expires: 30 });
        return resolve(res);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};

// directly return the fetch call if no intermediate action has to performed
export const getUser = (): any => (dispatch: AppDispatch) => {
  return fetchData({
    url: API_URLS.AUTH.ME,
    method: RequestTypes.GET,
    data: null,
  });
};

export const logoutUser = () => {
  return fetchData({
    url: API_URLS.AUTH.LOGOUT,
    method: RequestTypes.GET,
    isAuth: true,
  });
};

export const listUsers = (): any => (dispatch: AppDispatch) => {
  return fetchData({
    url: API_URLS.USERS.LIST,
    method: RequestTypes.GET,
    params: { page: 2 },
    isAuth: true,
  });
};
