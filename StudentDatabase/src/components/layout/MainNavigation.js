import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Student Details</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/Student" activeClassName={classes.active}>
              All Students
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-student" activeClassName={classes.active}>
              Add a Student
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
