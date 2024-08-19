import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [isRuning, setIsRuning] = useState(false)

  useEffect(()=>{
    let interval;
    if(isRuning){
      interval=setInterval(()=>{
        if(seconds===59){
          setMinutes((prev)=>prev+1);
          setSeconds(0);
        }else{
          setSeconds((prev)=>prev+1);
        }
      },1000)
    }else{
      clearInterval(interval);
    }
    return ()=>clearInterval(interval);
    
  },[minutes,seconds,isRuning])

  const handleReset=()=>{

    setIsRuning(false);
    setMinutes(0);
    setSeconds(0);


  }

  

  return (
    <>
    <h1>Stop Watch</h1>

    <div className='show-time'>
    <span>{"0" + minutes}:</span>
    <span>{ seconds < 10 ? "0" + seconds : seconds}</span>
    </div>

    <div>
      <button onClick={()=>setIsRuning(true)}>Start</button>
      <button onClick={()=>setIsRuning(false)}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
    </>
  )
}

export default App
