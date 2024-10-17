import './App.css';
import {useEffect, useState} from  'react';

 function App(){
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)
  const [startClicks, setStartClicks] = useState(0); // New state to track Start button clicks



  useEffect(() =>{
    let interval;
    if(running){
      interval = setInterval (()=> {
        setTime((prevTime) => prevTime + 10);
      }, 10)
    }else if(!running){
      clearInterval(interval);  
    }
    return() => clearInterval(interval);
  },[running]);


  // counts the amount of time the click button is clicked
  const handleStartClick = () => {
    if (startClicks < 4) { // Increment clicks and check if its 5 ore not
      setStartClicks(startClicks + 1);
    } else {
      setRunning(true); // Start the stopwatch on the 5th click
    }
  };
  const handleReset = () =>{
    setTime(0);
    setStartClicks(0);
    setRunning(false);
  };

  // const hasReachedTenMinutes = time  >= 60000;




  return (
   
    <div className="App">
     
   
  <div className='timer'>
     <span>{("0" + Math.floor ((time/60000)%60)).slice(-2)}:</span>
     <span>{("0" + Math.floor ((time/1000)%60)).slice(-2)}:</span>
    <span>{("0" + ((time/10) %100)).slice(-2)}</span>
    </div>
    
    <div className='watch'>
    {running ? (
      <button onClick={()=>(setRunning(false))}>Stop</button>
    ) : (
    
    <button onClick={handleStartClick}>Start</button> // Use the new handler

  )
  }
   
   <button onClick={handleReset}>Reset</button>    
    </div>
    </div>
  
  );
 }

 export default App;
