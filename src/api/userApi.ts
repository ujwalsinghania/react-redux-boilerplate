import { RequestTypes } from "./../interfaces/common";
import { fetchData } from "./axiosUtils";
import { LoginReq } from "../interfaces/apiResponse";
import { AppDispatch } from "../redux/store";
import { API_URLS } from "../config/apiUrls";
import Cookies from "js-cookie";
import { setMe } from "../redux/reducers/userReducer";

// return a promise is some redux action has to be performed
export const loginUser = (data: LoginReq) => (dispatch: AppDispatch) => {
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
export const getUser = () => (dispatch: AppDispatch) => {
  return new Promise((resolve, reject) => {
    fetchData({
      url: API_URLS.AUTH.ME,
      method: RequestTypes.GET,
      data:null,
    })
      .then((res: any) => {
        console.log(res.data.data)
        dispatch(setMe(res.data.data))
        return resolve(res);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};

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
