import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SITE_URLS } from "../config/siteUrls";
import RoleCheckHOC from "../hoc/roleCheckHoc";
import { Module, Operations } from "../interfaces/common";
import { setPermissions } from "../redux/reducers/userReducer";

const Dashboard = () => {
  const dispatch = useDispatch();

  const setPermission = () => {
    //example of setting a permission. Ideally it should be called from an API in index.tsx
    let samplePermission = [
      { module: Module.USERS, operation: Operations.LIST },
    ];

    dispatch(setPermissions(samplePermission));
  };

  return (
    <div className="mt-4 d-flex flex-column justify-content-center align-items-center">
      <h2 className="mb-4">Dashboard</h2>
      <button onClick={setPermission} className="btn btn-primary mb-3">
        Permit user route
      </button>
      <RoleCheckHOC module={Module.USERS} operations={[Operations.LIST]}>
        <Link to={SITE_URLS.USERS} className="btn btn-success">
          Users
        </Link>
      </RoleCheckHOC>
    </div>
  );
};

export default Dashboard;
