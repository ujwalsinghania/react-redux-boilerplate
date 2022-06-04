import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import Cookies from "js-cookie";
import axios from "axios";
import { API_BASE_PATH, API_URLS } from "./config/apiUrls";
import { logout, setMe } from "./redux/reducers/userReducer";

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
}

let token = Cookies.get("token");
//fetch and set user on page refresh
if (token) {
  try {
    axios({
      method: "GET",
      url: API_BASE_PATH + API_URLS.AUTH.ME,
      headers: {
        test: "dssdsd",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp: any) => {
        store.dispatch(setMe(resp.data.data));        
        render();
      })
      .catch((error) => {
        Cookies.remove("token");
        store.dispatch(logout());
        render();
      });
  } catch (e) {
    render();
  }
} else {
  render();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

serviceWorker.unregister();
