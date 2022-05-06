const SuspenseLoader = () => {
  return (
    <div className="h-100 w-100 d-flex justify-content-center align-items-center">
      <div className="spinner-grow spinner-grow-sm text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow spinner-grow-sm text-danger ms-2" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow spinner-grow-sm text-warning ms-2" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow spinner-grow-sm text-info ms-2" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow spinner-grow-sm text-light ms-2" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default SuspenseLoader;
