import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prevState => !prevState)
    },650)
    return () => clearInterval(interval);
  }, [])


  return (
    <>
      <h1 className="text-center">Vimulator</h1>
      <div className="container">
        <div className="game-board">
          <div className="cursor" style={{display: cursorVisible ? "block" : "none"}}>
            &nbsp;
          </div>
        </div>
      </div>
    </>
  )
}

export default App