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

interface Props {}

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const isAuth = useAppAuthSelector();

  if (!isAuth) {
    return <Redirect to={SITE_URLS.LOGIN} />;
  }

  //in case of RBAC
  /*  
 let hasPermissions = useHasPermissions();
  let { module, operation } = rest;
  if (module && operation && !hasPermissions(module, operation)) {
    toast.error("You don't have permission");
    return <Redirect to="/dashboard" />;
  } 
  */

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
