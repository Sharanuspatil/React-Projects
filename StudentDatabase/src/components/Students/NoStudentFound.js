import { Link } from "react-router-dom";

import classes from "./NoStudentFound.module.css";

const NoStudentFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No Students found!</p>
      <Link className="btn" to="/new-student">
        Add a student
      </Link>
    </div>
  );
};

export default NoStudentFound;
