import { RequestTypes } from "./../interfaces/common";
import { fetchData } from "./axiosUtils";
import { LoginReq } from "../interfaces/apiResponse";
import { AppDispatch } from "../redux/store";
import { API_URLS } from "../config/apiUrls";

export const loginUser = (data: LoginReq) => (dispatch: AppDispatch) => {
  return new Promise((resolve, reject) => {
    fetchData({
      url: API_URLS.AUTH.LOGIN,
      method: RequestTypes.POST,
      data,
    })
      .then((res: any) => {
        localStorage.setItem("token", res.token);
        return resolve(res);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};

export const getUser = () => (dispatch: AppDispatch) =>
  fetchData({
    url: API_URLS.AUTH.ME,
    method: RequestTypes.GET,
    data: null,
  });

/* export const logoutUser = () => {
  return request({
    url: API_URLS.AUTH.LOGOUT,
    method: "post",
    isAuth: true,
  });
};

 */

/* export const listUsers = () => {
  return request({
    url: API_URLS.AUTH.LOGIN + 'test',
    method: "get",
    params: {page: 1},
    isAuth: false,
  });
};
 */
