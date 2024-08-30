import React from 'react'
import { useRef } from 'react';

function  Useref() {
  const topRef= useRef(null);
  const scrollToTop = ()=>{
    if(topRef.current){
      topRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <div>
      <div style={{ height: '400px', overflowY: 'scroll' }} ref={topRef}>
      <div style={{ height: '1500px' }}>
        <p>Scroll down to see the button...</p>
        <button 
          onClick={scrollToTop} 
          style={{ 
            position: 'fixed', 
            bottom: '20px', 
            backgroundColor: 'lightblue', 
            padding: '10px',
            zIndex: 1000 // Ensure the button stays on top
          }}>
          Scroll to Top
        </button>
      </div>
    </div>
    </div>
  )
}

export default Useref
