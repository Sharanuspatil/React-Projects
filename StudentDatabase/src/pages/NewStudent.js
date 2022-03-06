import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import StudentForm from "../components/Students/StudentForm";
import useHttp from "../hooks/use-http";
import { addStudent } from "../lib/api";

const NewStudent = () => {
  const { sendRequest, status } = useHttp(addStudent);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/Student");
    }
  }, [status, history]);

  const addStudentHandler = (StudentData) => {
    sendRequest(StudentData);
  };

  return (
    <StudentForm
      isLoading={status === "pending"}
      onAddStudent={addStudentHandler}
    />
  );
};

export default NewStudent;
