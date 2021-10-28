import { Route, Redirect } from "react-router-dom";
import { useAppAuthSelector } from "../hooks/selectors/userSelector";
import AuthLayout from "../layouts/authLayout";
import ErrorBoundary from "./errorBoundary";

const PrivateRoute = ({ children, ...rest }: any) => {
  const isAuth = useAppAuthSelector();

  /* 
    //in case of RBAC
           let userPermissions = useUserPermissionsSelector()

           let hasPermissions = userPermissions.some(item => item.module === rest.module && rest.operation.includes(item.operation))

           if (rest.module && rest.operation && !hasPermissions) {
            toast.error("You don't have permission")
            return <Redirect to='/dashboard' />
         }
  */

  return (
    <Route
      exact={true}
      path={rest.path}
      render={(props) =>
        isAuth ? (
          <AuthLayout>
            <ErrorBoundary>{children}</ErrorBoundary>
          </AuthLayout>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
