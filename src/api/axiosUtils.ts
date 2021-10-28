import axios from "axios";
import { logout } from "../redux/reducers/userReducer";
import store from "../redux/store";
import { API_BASE_URL } from "./../config/siteUrls";

const client = axios.create({ baseURL: API_BASE_URL });

export const request = ({ ...options }) => {
  if (options.isAuth) {
    options["headers"] = {
      Authorization: "Bearer " + localStorage.getItem("token"),
    };
    delete options.isAuth;
  }
  const onSuccess = (response: any) => response;
  const onError = (error: any) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem("token");
      store.dispatch(logout());
      window.location.href = "/login";
    }
    return Promise.reject(error);
  };

  return client(options).then(onSuccess).catch(onError);
};
