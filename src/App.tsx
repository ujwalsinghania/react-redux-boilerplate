import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FpLoader from "./components/common/fullpageLoader";
import ScrollToTop from "./components/common/scrollToTop";
import { ALL_ROUTES } from "./config/allRoutes";
import PrivateRoute from "./hoc/privateRoute";
import PublicRoute from "./hoc/pulicRoute";
import { setMe } from "./redux/reducers/userReducer";
import { useAppDispatch } from "./redux/store";
import { Toaster } from 'react-hot-toast';
import Home from "./containers/home";

function App() {
  const dispatch = useAppDispatch();

  return (
    <BrowserRouter>
      <>
        <FpLoader />
        <Toaster position="top-right"/>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            {ALL_ROUTES.map((route) =>
              route.isPrivate ? (
                <PrivateRoute key={route.path} {...route} />
              ) : (
                <PublicRoute key={route.path} {...route} />
              )
            )}
          </Switch>
        </ScrollToTop>
      </>
    </BrowserRouter>
  );
}

export default App;
