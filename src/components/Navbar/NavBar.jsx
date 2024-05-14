
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={"/"}>
          Shoping Cart React Redux
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/cart"} className="nav-link">
                Cart
              </NavLink>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  )
}
