import axios, { AxiosRequestConfig } from "axios";
import { setLoading } from "../redux/reducers/commonReducer";
import store from "../redux/store";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    let token: string | null = localStorage.getItem("token");
    if (token && config.headers) {
      config.headers.Authorization = 'Bearer '+token;
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
      .then((resp) => {
        return resolve(resp.data);
      })
      .catch((error) => {
        const { response } = error;
        if (response?.status === 403) {
          //store.dispatch(logoutUser());
        }
        return reject({
          error: response.data,
          message: response?.data?.statusCode,
        });
      })
      .finally(() => {
        store.dispatch(setLoading(false));
      });
  });
};
