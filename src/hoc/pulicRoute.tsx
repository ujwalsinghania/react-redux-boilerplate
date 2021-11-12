import { Route, Redirect } from "react-router-dom";
import { useAppAuthSelector } from "../hooks/selectors/userSelector";
import UnAuthLayout from "../layouts/unAuthLayout";

const PublicRoute = ({ children, ...rest }: any) => {
  const isAuth = useAppAuthSelector();
  console.log(rest.path, children)
  return (
    <Route
      path={rest.path}
      exact={true}
      render={(props) =>
        isAuth && rest.isRestricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <UnAuthLayout>{children}</UnAuthLayout>
        )
      }
    />
  );
};

export default PublicRoute;