import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const useLoaderSelector = () => {
  const isLoading = useSelector((state: RootState) => state.common.isLoading);
  return isLoading;
};
