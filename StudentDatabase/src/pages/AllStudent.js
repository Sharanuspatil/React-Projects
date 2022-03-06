import { useEffect } from "react";

import StudentList from "../components/Students/StudentList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoStudentFound from "../components/Students/NoStudentFound";
import useHttp from "../hooks/use-http";
import { getAllStudent } from "../lib/api";

const AllStudent = () => {
  const {
    sendRequest,
    status,
    data: loadedStudent,
    error,
  } = useHttp(getAllStudent, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (
    status === "completed" &&
    (!loadedStudent || loadedStudent.length === 0)
  ) {
    return <NoStudentFound />;
  }

  return <StudentList quotes={loadedStudent} />;
};

export default AllStudent;
