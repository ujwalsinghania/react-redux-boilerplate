import { Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import SuspenseLoader from "../components/common/suspenseLoader";
import { SITE_URLS } from "../config/siteUrls";
import { useAppAuthSelector } from "../hooks/selectors/userSelector";
import { RouteType } from "../interfaces/common";
import UnAuthLayout from "../layouts/unAuthLayout";

const PublicRoute = ({ component: Component, ...rest }: RouteType) => {
  const isAuth = useAppAuthSelector();
  console.log(isAuth, rest);

  if (isAuth && rest.isRestricted) {
    return <Redirect to={SITE_URLS.DASHBOARD} />;
  }

  return (
    <Route
      path={rest.path}
      exact={true}
      render={(props) => (
        <UnAuthLayout>
          <Suspense fallback={<SuspenseLoader />}>
            <Component {...props} />
          </Suspense>
        </UnAuthLayout>
      )}
    />
  );
};

export default PublicRoute;
