import { useLoaderSelector } from "../../hooks/selectors/commonSelector";

const FpLoader = () => {
  const isLoading = useLoaderSelector();
  return (
    isLoading ? <div className="app-loader-container">
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div> : null
  );
};

export default FpLoader;
