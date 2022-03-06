import { Fragment } from "react";

import StudentItem from "./StudentItem";
import classes from "./StudentList.module.css";

const StudentList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.quotes.map((student) => (
          <StudentItem
            key={student.id}
            id={student.id}
            author={student.author}
            age={student.Age}
            phone={student.phone}
            grade={student.Grade}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default StudentList;
