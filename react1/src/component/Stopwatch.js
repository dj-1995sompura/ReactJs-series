import React, { useEffect, useState } from 'react';
import './stopwatch.css'


function Stopwatch() {

const [milliseconds, setMilliseconds] = useState(0);
const [seconds, setSeconds] = useState(0);
const [minutes, setMinutes] = useState(0);
const [isRunning, setIsRunning] = useState(false);
const [lapTimes, setLapTimes] = useState([]);
// const [isLapping, setIsLapping] = useState(false);
const [timeis, setTimeis]= useState("00:00:000");

useEffect(()=>{
    let timer;
    
    if(isRunning){
        timer = setInterval(()=>{
            setMilliseconds((prevMilliseconds) => (prevMilliseconds + 10) % 1000);

            if (milliseconds === 990) {
              // At 990 milliseconds (almost 1000), update seconds
              setSeconds((prevSeconds) => (prevSeconds + 1) % 60);
    
              if (seconds === 59) {
                // At 59 seconds, update minutes
                setMinutes((prevMinutes) => prevMinutes + 1);
              }
            }
          }, 10);
    }
    
    return () => clearInterval(timer);
}, [isRunning, milliseconds, seconds]);


const handleStart =()=>{
    setIsRunning(true);
}
const handleStop =()=>{
    setIsRunning(false);
    // setIsLapping(true);
    setTimeis(`${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}: ${String(milliseconds).padStart(3,'0')}`);
    setLapTimes((prevLapTimes)=>[...prevLapTimes,`${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}: ${String(milliseconds).padStart(3,'0')}`]);
    // console.log(lapTimes);
}
const handleReset =()=>{
    setIsRunning(false);
    setMilliseconds(0);
    setSeconds(0);
    setMinutes(0);
    setTimeis("00:00:000");
    // setIsLapping(false);
    setLapTimes([])
}

const formatTime = (value) => String(value).padStart(2,'0');


  return (
    <div>
      <div className='stopWatch'>
        <p>{formatTime(`${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}: ${String(milliseconds).padStart(3,'0')}`)}</p>
        <button onClick={handleStart} disabled={isRunning}>Start</button>
        <button onClick={handleStop} disabled={!isRunning}>Pause</button>
        <button onClick={handleReset}>Reset</button>
        <p>Time is {timeis}</p>
        <ul className='lapSlot'>
          {lapTimes.map((lapTime,index)=>(
              <li key={{index}}>{lapTime}</li> 
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Stopwatch
