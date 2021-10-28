import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { getUser } from "./api/userApi";
import "./App.css";
import FpLoader from "./components/common/fullpageLoader";
import ScrollToTop from "./components/common/scrollToTop";
import { ALL_ROUTES } from "./config/allRoutes";
import Home from "./containers/home/home";
import PrivateRoute from "./hoc/privateRoute";
import PublicRoute from "./hoc/pulicRoute";
import { setMe } from "./redux/reducers/userReducer";

function App() {
  const dispatch = useDispatch();

  const { isLoading } = useQuery("user", getUser, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
    enabled: localStorage.getItem("token") ? true : false,
    onSuccess: (data) => {
      dispatch(setMe(data));
    },
  });

  if (isLoading) {
    return <FpLoader />;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            {ALL_ROUTES.map((route) =>
              route.isPrivate ? (
                <PrivateRoute key={route.path} {...route}>
                  <route.component />
                </PrivateRoute>
              ) : (
                <PublicRoute key={route.path} {...route}>
                  <route.component />
                </PublicRoute>
              )
            )}
          </Switch>
        </ScrollToTop>
      </div>
    </BrowserRouter>
  );
}

export default App;
