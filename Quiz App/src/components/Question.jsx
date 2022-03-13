import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextQuiz, prevQuiz, submitQuiz ,timeOut } from "../redux/action/quizAction";
import quizData from "../data/quiz";


const Question = () => {

  const dispatch = useDispatch();
  const { activeQuestion, answers , time } = useSelector(
    (state) => state?.quizReducer
  );
  const [data, setData] = useState(quizData[activeQuestion]);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState("");
  const [timer,setTimer] = useState(time)
 

  useEffect(() => {
    if(timer > 0 )
    {
      setTimeout(() => setTimer(timer - 1), 1000)
    }else{
      dispatch(timeOut());
    }
  }, [dispatch, timer]);
  const radiosWrapper = useRef();
  useEffect(() => {
    setData(quizData[activeQuestion]);
    
  
    if (answers[activeQuestion] !== undefined) {
      setSelected(answers[activeQuestion].a);
      console.log("RUn once");
    }
  }, [data, activeQuestion, answers]);
  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) {
      setError("");
    }
  };
  const handlePrev = () => {
    setError("");
    dispatch(prevQuiz());
  };
  const handleNext = (e) => {

    
    if (selected === "") {
      return setError("Please select one option!");
    }

    if (selected!== quizData[activeQuestion].answer) {
      return setError("Please select Correct answer");
     
    }
  

    
    let ans = [...answers];
    ans[activeQuestion] = {
      q: data.question,
      a: selected,
    };
    dispatch(
      nextQuiz({
        answers: ans,
      })
    );
    setSelected("");
    const findCheckedInput =
      radiosWrapper.current.querySelector("input:checked");
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  };
  const handleSubmit = () => {
    if (selected === "") {
      return setError("Please select one option!");
    }

    
    dispatch(
      submitQuiz({
        answers: [
          ...answers,
          (answers[activeQuestion] = {
            q: data.question,
            a: selected,
          }),
        ],
        time: time - timer
      })
    );

    
  };
  return (
    <div className="questionBox">
      <section className="questionHead">
        <h3>
          Question {activeQuestion + 1}/{quizData.length}
        </h3>
        <h5>{timer}</h5>
      </section>
      <section className="middleBox" >
        <div className="question" >
        <p>{data?.question}</p>
        
        <img src={data?.image}  alt="question"></img>
        {error && <div>{error}</div>}
        </div>
      
        <div className="option" ref={radiosWrapper}>
          {data?.choices.map((choice, i) => (
            <label className={`${choice === selected ? `selected`: `text`}`} key={i}>
              <input
                type="radio"
                name="answer"
                value={choice}
                onChange={changeHandler}
                checked={choice === selected}
              />
              {choice}
            </label>
          ))}
        </div>
      </section>
        <section className="questionBottom">
          {activeQuestion <= 0 ? null : (
            <button className="button" onClick={handlePrev}>Prev</button>
          )}

          {activeQuestion + 1 >= quizData.length ? (
            <button className="button nextBtn" onClick={handleSubmit}>Submit</button>
          ) : (
            <button className="button nextBtn" onClick={handleNext}>Next</button>
          )}
        </section>
    </div>
  );
};

export default Question;
