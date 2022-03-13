import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetQuiz } from "../redux/action/quizAction";
import quizData ,{Questions}from "../data/quiz";
import Modal from "./Modal";
import Trophy from "../assets/images/trophy.png";
const End = () => {
  const dispatch = useDispatch();
  const { answers,time } = useSelector((state) => state.quizReducer);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [modal, setModal] = useState(false);

  
  useEffect(() => {
    let correct = 0;
    answers.forEach((result, index) => {
      if (result.a === quizData[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
  }, [answers]);

  
  
  const handleReset = (e) => {
    dispatch(resetQuiz());
    Questions();

    
  };


    useEffect(() => {
      fetch("https://quiz-2e6c6-default-rtdb.firebaseio.com/questions.json", {
        method: "POST",
        body: JSON.stringify({
          answers: answers,
          CorrectAnswers: correctAnswers,
        }),
      });
    }, [answers, correctAnswers]);
  
  return (
    <div className="endBox"   >
      <img src={Trophy} className="trophy" alt="" srcset="" />
      <h3>Your results</h3>
      <p>
        {correctAnswers} of {quizData.length}
      </p>
      <p>
        <strong>
          {Math.floor((correctAnswers / quizData.length) * 100)}%
        </strong>
      </p>
      <p>
        <strong>Your time:</strong> {time}sec
      </p>
      <section>
        <button className="button" onClick={() => setModal(true)}>
          Check your answers
        </button>
        <button 
          className="button"
          style={{ marginLeft: "20px" }}
          onClick={handleReset}
        >
          Try again
        </button>
      </section>
      <Modal show={modal}>
        <section className="modalBody">
          <header>
            <p className="">Your Answers</p>
            <p  style={{
              cursor: "pointer"
            }} onClick={() => setModal(false)}>X</p>
          </header>
          <section className="content">
            <ul>
              {answers.map((result, i) => (
                <li key={i} className="mb-6">
                  <p>
                    <strong>{result.q}</strong>
                  </p>
                  <p className={
                      result.a === quizData[i].answer
                        ? "bg-success"
                        : "bg-danger"
                    }
                  >
                    Your answer: {result.a}
                  </p>
                  {result.a !== quizData[i].answer && (
                    <p className="bg-warning">
                      Correct answer: {quizData[i].answer}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </section>
      </Modal>
    </div>
  );
};

export default End;
