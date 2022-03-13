import React,{ useState} from "react";
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { startQuiz } from "../redux/action/quizAction";


const Start = () => {
  const dispatch = useDispatch()
  const [minute,setMinute] = useState(1)
  const [second ,setSecond] = useState(0)
  const [time,setTime] = useState(60)
  
  const[Name,setName]= useState("")

  

 
  const handleQuizStart = () =>{
    dispatch(startQuiz(time))
  }
  useEffect(() => {
    if (minute > 59) {
      setMinute(1)
    }
    if (second > 59) {
      setSecond(1)
    }

  
  }, [minute,second])
  useEffect(() => {


    if (minute !== isNaN && second !== isNaN) {
      setTime(minute * 60 + second)
    }
  }, [minute,second])
  return (
   
    <div className="startBox">
      <div >
        <div >
          <h1>Start the Quiz</h1>
          <p>Best of luck!</p>
          <p>Time:&nbsp;&nbsp;{time}sec</p>
          <hr/>
          <p>Enter Your name:</p>
          <label htmlFor ="" >
            <input type="text"   value={Name} onChange={(e) =>setName(e.target.value)}/>
            </label>

          <hr/>
        
          <section ClassName="startContent" >
            
            <label htmlFor=""><input type="number" className="timeInput" value={minute} onChange={(e) =>setMinute(parseInt(e.target.value))}  /> min</label>
            <label htmlFor=""><input type="number" className="timeInput" value={second} onChange={(e) =>setSecond(parseInt(e.target.value))}  /> sec</label>
          </section>
          <button className="startButton" onClick={handleQuizStart}>
            START
          </button>
        </div>
      </div>
    </div>
  );
};



export default Start;
