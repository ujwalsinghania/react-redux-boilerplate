import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const useAppAuthSelector = () => {
  const isAuth = useSelector((state: RootState) => state.user.isAuthenticated);
  return isAuth;
};

export const useAppUserSelector = () => {
  const user = useSelector((state: RootState) => state.user.user);
  return user;
};

export const usePermissionsSelector = () => {
  const permissions = useSelector((state: RootState) => state.user.permissions);
  return permissions;
};
