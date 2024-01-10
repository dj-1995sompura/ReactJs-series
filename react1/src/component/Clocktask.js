import React from 'react'
import './clocktask.css'
import { useState, useEffect } from 'react'

function Clocktask() {
// const [time, setTime]=useState(new Date().toLocaleDateString());

const [hour, setHour]=useState(new Date().getHours());
const [minute, setMinute]=useState(new Date().getMinutes());
const [second, setSecond]=useState(new Date().getSeconds());

useEffect(()=>{
    const interval = setInterval(()=>{
        // setTime(new Date().toLocaleTimeString());
        setHour(new Date().getHours());
        setMinute(new Date().getMinutes());
        setSecond(new Date().getSeconds());
        console.log(new Date().toLocaleTimeString());
    },1000);

    return () => clearInterval(interval);
});
  return (
    <div>
        {/* <div className='timer'>
            <h1>Digital Timer</h1>
            <p>{time}</p>
        </div> */}
        <section>
            <div class="clock">
            <div class="bigtime">
                <div class="time numbers hr"><span id="hours">{hour}</span></div>
                <div class="time hr dot"id="blink"><span>:</span></div> 
                <div class="time numbers hr"><span id="minutes">{minute}</span></div>
                </div>
                <div class="lowtime">
                <div class="time bottom numbers"><span id="seconds">{second}</span></div>
                <div class="time bottom low"><span id="sessions">{hour>12?'PM':'AM'}</span></div>
            </div>
            </div>
        </section>
    </div>
  )
}


export default Clocktask
