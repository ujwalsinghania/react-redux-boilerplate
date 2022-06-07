import { Link } from "react-router-dom";
import { SITE_URLS } from "../../config/siteUrls";
import { logout } from "../../redux/reducers/userReducer";
import { useAppDispatch } from "../../redux/store";

const Header = () => {
  const dispatch = useAppDispatch();

  const logoutUser = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={SITE_URLS.USERS}>
                Users
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={logoutUser}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
