import { Route, Redirect } from "react-router-dom";
import {
  useAppAuthSelector,
  useHasPermissions,
} from "../hooks/selectors/userSelector";
import AuthLayout from "../layouts/authLayout";
import ErrorBoundary from "./errorBoundary";
import { Suspense } from "react";
import SuspenseLoader from "../components/common/suspenseLoader";
import { SITE_URLS } from "../config/siteUrls";
import toast from "react-hot-toast";
import { RouteType } from "../interfaces/common";

const PrivateRoute = ({ component: Component, ...rest }: RouteType) => {
  const isAuth = useAppAuthSelector();
  let hasPermissions = useHasPermissions();

  if (!isAuth) {
    return <Redirect to={SITE_URLS.LOGIN} />;
  }

  //use this to enable RBAC
  let { module, operation } = rest;
  if (module && operation && !hasPermissions(module, operation)) {
    toast.error("You don't have permission");
    return <Redirect to={SITE_URLS.DASHBOARD} />;
  }

  return (
    <Route
      exact={true}
      path={rest.path}
      render={(props) => (
        <AuthLayout>
          <ErrorBoundary>
            <Suspense fallback={<SuspenseLoader />}>
              <Component {...props} />
            </Suspense>
          </ErrorBoundary>
        </AuthLayout>
      )}
    />
  );
};

export default PrivateRoute;
