import { API_BASE_PATH } from "./../config/apiUrls";
import axios, { AxiosRequestConfig } from "axios";
import { setLoading } from "../redux/reducers/commonReducer";
import store from "../redux/store";
import Cookies from "js-cookie";

axios.defaults.baseURL = API_BASE_PATH;
axios.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    let token: string | undefined = Cookies.get("token");
    if (token && config.headers) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export const fetchData = ({
  url = "",
  method = undefined,
  data = null,
  showLoader = true,
}: any) => {
  return new Promise((resolve, reject) => {
    if (showLoader) {
      store.dispatch(setLoading(true));
    }
    const dataOrParams = ["GET", "DELETE"].includes(method || "get")
      ? "params"
      : "data";

    //use axios interceptor
    axios({
      url,
      method,
      [dataOrParams]: data,
    })
      .then((resp:any) => {
        return resolve(resp.data);
      })
      .catch((error:any) => {
        const { response } = error;
        if (response?.status === 403) {
          //store.dispatch(logoutUser());
        }
        return reject({
          error: response?.data,
          message: response?.data?.statusCode,
        });
      })
      .finally(() => {
        store.dispatch(setLoading(false));
      });
  });
};
