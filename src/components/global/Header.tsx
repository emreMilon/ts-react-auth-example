import { NavLink, } from "react-router-dom";

const Navbar = () => {

  
  let page = window.location.pathname
  console.log(page)


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
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
            {
              page === "/"  &&   <li className="nav-item">
              <a className="nav-link" href="#login">
                Login
              </a>
            </li> 
            }
          
            {/* <li className="nav-item">
                <NavLink className="nav-link" to="#">Pricing</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</NavLink>
                </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;