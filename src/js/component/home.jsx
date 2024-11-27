import React from 'react';

function SecondCounter(props) {  
  let seconds = 0;

  setInterval(() => {
    seconds += 1;
    
    const counterElement = document.getElementById("seconds-counter");
    if (counterElement) {
      counterElement.innerText = String(seconds).padStart(6, "0");
    }
  }, 1000);

  return (
    <div className='App'>
      <i class="fa-solid fa-timer"></i>
      <h2 id="seconds-counter">{seconds}</h2>
    </div>
  );
}

export default SecondCounter;