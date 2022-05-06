import { Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import SuspenseLoader from "../components/common/suspenseLoader";
import { useAppAuthSelector } from "../hooks/selectors/userSelector";
import UnAuthLayout from "../layouts/unAuthLayout";

const PublicRoute = ({ component: Component, ...rest }: any) => {
  const isAuth = useAppAuthSelector();

  return (
    <Route
      path={rest.path}
      exact={true}
      render={(props) =>
        isAuth && rest.isRestricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <UnAuthLayout>
            <Suspense fallback={<SuspenseLoader />}>
              <Component {...props} />
            </Suspense>
          </UnAuthLayout>
        )
      }
    />
  );
};

export default PublicRoute;
