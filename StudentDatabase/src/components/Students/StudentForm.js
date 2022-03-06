import { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./StudentForm.module.css";

const StudentForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const authorInputRef = useRef();
  const ageInputRef = useRef();
  const phoneInputRef = useRef();
  const gradeInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredGrade = gradeInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;

    if (enteredAge < 0 || enteredAge > 126) {
      alert("Please enter Valid age ");
    } else if (
      enteredAuthor.trim().length < 2 ||
      !enteredAuthor.match(/^[A-Za-z]+$/)
    ) {
      alert("Please enter a Correct name");
    } else if (
      enteredPhone.trim().length !== 10 ||
      !enteredPhone.match(/^[0-9]+$/)
    ) {
      alert("Please enter a Valid Phone Number");
    } else if (
      enteredGrade.trim().length < 0 ||
      enteredGrade < 0 ||
      enteredGrade >= 100
    ) {
      alert("Please enter a Valid Grade Between 0 and 100");
    } else {
      props.onAddStudent({
        author: enteredAuthor,
        Age: enteredAge,
        phone: enteredPhone,
        Grade: enteredGrade,
      });
    }
  }

  // optional: Could validate here

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) =>
          "Are you sure you want to leave? All your entered data will be lost!"
        }
      />
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Name</label>
            <input
              type="text"
              id="author"
              placeholder="Enter Your Name"
              ref={authorInputRef}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              placeholder="Enter Your Age"
              ref={ageInputRef}
              required
            ></input>
          </div>

          <div className={classes.control}>
            <label htmlFor="number">Phone Number</label>
            <input
              type="tel"
              id="number"
              placeholder="Enter Your Phone Number"
              ref={phoneInputRef}
              required
            ></input>
          </div>

          <div className={classes.control}>
            <label htmlFor="grade">Grade</label>
            <input
              type="number"
              id="grade"
              placeholder="Enter Your Grade in Percentage "
              ref={gradeInputRef}
              required
            ></input>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className="btn">
              Submit
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default StudentForm;
