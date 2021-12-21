import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IUser, RootStore } from "../../utils/TypeScript";
import { logOut } from "../../redux/actions/authAction";

const Navbar = () => {
  const { auth } = useSelector((state: RootStore) => state);
  const dispatch = useDispatch();
  const data: IUser | any = auth?.user;

  const userForecastLabel = data?.position === "Leiter" ? "Users" : "Forecasts";
  const userForecastLink =
    data?.position === "Leiter" ? "/users" : `users/${data?.userId}`;

  const unloginLinks = [
    { label: "Login", path: "/login" },
    { label: "Register", path: "/register" },
  ];

  const loginLinks = [
    { label: "Home", path: "/" },
    { label: `${userForecastLabel}`, path: `${userForecastLink}` },
  ];

  const navLinks = auth.access_token ? loginLinks : unloginLinks;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          CRM-Forecast
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbarHeader">
            <ul className="navbar-nav">
              {navLinks?.map((link, index) => (
                <li key={index} className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to={link?.path}
                  >
                    {link?.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            {auth?.user && (
              <ul className="navbar-nav">
                <li>
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                    onClick={() => dispatch(logOut())}
                  >
                    Logout
                  </NavLink>
                </li>
                <li className="nav-link active">{auth?.user?.lastName}</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
