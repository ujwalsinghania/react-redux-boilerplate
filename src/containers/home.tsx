import { Link } from "react-router-dom";
import { SITE_URLS } from "../config/siteUrls";

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column h-100">
      <h5>Sample Home Page</h5>
      <Link to={SITE_URLS.LOGIN} className="btn btn-primary">
        Login
      </Link>
    </div>
  );
};

export default Home;
