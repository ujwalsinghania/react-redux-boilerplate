import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FpLoader from "./components/common/fullpageLoader";
import ScrollToTop from "./components/common/scrollToTop";
import { ALL_ROUTES } from "./config/allRoutes";
import PrivateRoute from "./hoc/privateRoute";
import PublicRoute from "./hoc/pulicRoute";
import { Toaster } from "react-hot-toast";
import Home from "./containers/home";
import UnAuthLayout from "./layouts/unAuthLayout";
import { RouteType } from "./interfaces/common";

function App() {

  return (
    <BrowserRouter>
      <>
        <FpLoader />
        <Toaster position="top-right" />
        <ScrollToTop>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <UnAuthLayout>
                <Home />
              </UnAuthLayout>}
            />
            {ALL_ROUTES.map((route: RouteType) =>
              route?.isPrivate ? (
                <PrivateRoute key={route.path} {...route} />
              ) : (
                <PublicRoute key={route.path} {...route} />
              )
            )}
            <Route path="*" component={() => <h6>404</h6>} />
          </Switch>
        </ScrollToTop>
      </>
    </BrowserRouter>
  );
}

export default App;
