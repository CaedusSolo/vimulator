import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [cursorVisible, setCursorVisible] = useState(true);
  const [latestCommand, setLatestCommand] = useState("")
  const [cursorRow, setCursorRow] = useState(0)
  const [cursorColumn, setCursorColumn] = useState(0)
  const [targetRow, setTargetRow] = useState(0)
  const [targetColumn, setTargetColumn] = useState(0)
  const targetCharacter = "X"

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prevState => !prevState)
    }, 550)
    return () => clearInterval(interval);
  }, [])


  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  })

  useEffect(() => {
    const cursor = document.querySelector(".cursor")
    if (cursor) {
      cursor.style.gridRowStart = cursorRow + 1
      cursor.style.gridColumnStart = cursorColumn + 1
    }
  }, [cursorRow, cursorColumn])


  // Functions
  function handleKeyDown(e) {
    const key = e.key
    setLatestCommand(key)

    if (key == "h") {
      moveCursorLeft()
    }

    else if (key == "j") {
      moveCursorDown()
    }

    else if (key == "k") {
      moveCursorUp()
    }

    else if (key == "l") {
      moveCursorRight()
    }

  }


  //  Keybindings functions
  function moveCursorUp() {
    setCursorRow(prevRow => Math.max(0, prevRow - 1));
    const cursor = document.querySelector('.cursor');
    cursor.style.backgroundColor = 'lightcoral';
    setTimeout(() => {
      cursor.style.backgroundColor = 'red';
    }, 300);
  }

  function moveCursorDown() {
    setCursorRow(prevRow => Math.min(12, prevRow + 1)); // Boundary check added
    const cursor = document.querySelector('.cursor');
    cursor.style.backgroundColor = 'lightcoral';
    setTimeout(() => {
      cursor.style.backgroundColor = 'red';
    }, 300);
  }

  function moveCursorLeft() {
    setCursorColumn(prevColumn => Math.max(0, prevColumn - 1));
    const cursor = document.querySelector('.cursor');
    cursor.style.backgroundColor = 'lightcoral';
    setTimeout(() => {
      cursor.style.backgroundColor = 'red';
    }, 300);
  }

  function moveCursorRight() {
    setCursorColumn(prevColumn => Math.min(37, prevColumn + 1)); // Boundary check added
    const cursor = document.querySelector('.cursor');
    cursor.style.backgroundColor = 'lightcoral';
    setTimeout(() => {
      cursor.style.backgroundColor = 'red';
    }, 300);
  }

  return (
    <>
      <h1 className="text-center">Vimulator</h1>
      <h2 className="text-center">Latest Key Press: {latestCommand}</h2>
      <div className="container">
        <div className="game-board">
          <div className="cursor" style={{
            display: cursorVisible ? "block" : "none",
            gridRowStart: cursorRow + 1,
            gridColumnStart: cursorColumn + 1
          }}>
            &nbsp;
          </div>
          <div className="target"
            style={{
              gridRowStart: targetRow + 1,
              gridColumnStart: targetColumn + 1
            }}
          >
            {targetCharacter}
          </div>
        </div>
      </div>
    </>
  )
}

export default App