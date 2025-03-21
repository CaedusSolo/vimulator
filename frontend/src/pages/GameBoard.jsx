import React, { useState, useEffect } from 'react'
import { saveScore } from '../api/gameApi.js';

function GameBoard() {
  const [cursorVisible, setCursorVisible] = useState(true);
  const [cursorRow, setCursorRow] = useState(0);
  const [cursorColumn, setCursorColumn] = useState(0);
  const [targetRow, setTargetRow] = useState(Math.floor(Math.random() * 12));
  const [targetColumn, setTargetColumn] = useState(Math.floor(Math.random() * 37));
  const [score, setScore] = useState(0)

  useEffect(() => {
    resetChallenge();
    const interval = setInterval(() => {
      setCursorVisible((prevState) => !prevState);
    }, 550);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    if (cursor) {
      cursor.style.gridRowStart = cursorRow + 1;
      cursor.style.gridColumnStart = cursorColumn + 1;
    }
  }, [cursorRow, cursorColumn]);

  useEffect(() => {
    const target = document.querySelector('.target');
    if (target) {
      target.style.gridRowStart = targetRow + 1;
      target.style.gridColumnStart = targetColumn + 1;
    }
  }, [targetRow, targetColumn]);

  useEffect(() => {
    checkCollision();
  }, [cursorRow, cursorColumn]);

  function handleKeyDown(e) {
    const key = e.key;

    if (key === 'h') {
      moveCursorLeft();
    } else if (key === 'j') {
      moveCursorDown();
    } else if (key === 'k') {
      moveCursorUp();
    } else if (key === 'l') {
      moveCursorRight();
    }
  }

  function moveCursorUp() {
    setCursorRow((prevRow) => Math.max(0, prevRow - 1));
    const cursor = document.querySelector('.cursor');
    cursor.style.backgroundColor = 'lightcoral';
    setTimeout(() => {
      cursor.style.backgroundColor = 'red';
    }, 300);
  }

  function moveCursorDown() {
    setCursorRow((prevRow) => Math.min(12, prevRow + 1));
    const cursor = document.querySelector('.cursor');
    cursor.style.backgroundColor = 'lightcoral';
    setTimeout(() => {
      cursor.style.backgroundColor = 'red';
    }, 300);
  }

  function moveCursorLeft() {
    setCursorColumn((prevColumn) => Math.max(0, prevColumn - 1));
    const cursor = document.querySelector('.cursor');
    cursor.style.backgroundColor = 'lightcoral';
    setTimeout(() => {
      cursor.style.backgroundColor = 'red';
    }, 300);
  }

  function moveCursorRight() {
    setCursorColumn((prevColumn) => Math.min(37, prevColumn + 1));
    const cursor = document.querySelector('.cursor');
    cursor.style.backgroundColor = 'lightcoral';
    setTimeout(() => {
      cursor.style.backgroundColor = 'red';
    }, 300);
  }

  function checkCollision() {
    if (cursorRow === targetRow && cursorColumn === targetColumn) {
      setScore(prevScore => prevScore + 1)
      resetChallenge();
    }
  }

  function resetChallenge() {
    setTargetRow(Math.floor(Math.random() * 12));
    setTargetColumn(Math.floor(Math.random() * 37));
  }

  return (
    <>
      <h2 className="text-center">Vimulator</h2>
      <h2 className="text-center">Get to the X !</h2>
      <h4 className="text-center">Score: {score}</h4>
        <div className="game-board">
          <div
            className="cursor"
            style={{
              display: cursorVisible ? 'block' : 'none',
              gridRowStart: cursorRow + 1,
              gridColumnStart: cursorColumn + 1,
            }}
          >
            &nbsp;
          </div>
          <i className="fa-solid fa-x target"
            style={{
              gridRowStart: targetRow + 1,
              gridColumnStart: targetColumn + 1
            }}
          ></i>
      </div>
    </>
  )
}

export default GameBoard