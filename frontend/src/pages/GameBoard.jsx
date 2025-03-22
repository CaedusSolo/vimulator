import React, { useState, useEffect, useRef } from 'react'
import { saveScore } from '../api/gameApi.js';

function GameBoard() {
  const [cursorVisible, setCursorVisible] = useState(true);
  const [cursorRow, setCursorRow] = useState(0);
  const [cursorColumn, setCursorColumn] = useState(0);
  const [targetRow, setTargetRow] = useState(Math.floor(Math.random() * 12));
  const [targetColumn, setTargetColumn] = useState(Math.floor(Math.random() * 37));
  const [timeLeft, setTimeLeft] = useState(60)
  const [gameOver, setGameOver] = useState(false)
  const timerId = useRef(null)
  const [score, setScore] = useState(0)

  useEffect(() => {
    resetChallenge();
    const interval = setInterval(() => {
      setCursorVisible((prevState) => !prevState);
    }, 550);

    timerId.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerId.current)
          setGameOver(true)
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => {
      clearInterval(interval)
      clearInterval(timerId.current)
    };
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

  useEffect(() => {
    if (gameOver) {
      saveScoreOnGameOver()
    }
  }, [gameOver])

  function handleKeyDown(e) {
    if (gameOver) return
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
    if (gameOver) return
    if (cursorRow === targetRow && cursorColumn === targetColumn) {
      setScore(prevScore => prevScore + 1)
      resetChallenge();
    }
  }

  function resetChallenge() {
    setTargetRow(Math.floor(Math.random() * 12));
    setTargetColumn(Math.floor(Math.random() * 37));
  }

  async function saveScoreOnGameOver() {
    const response = await saveScore(score)

  }

  function restartGame() {
    setGameOver(false)
    setScore(0)
    setTimeLeft(60)
    setCursorColumn(0)
    setCursorRow(0)
    resetChallenge()

    if (timerId.current) {
      clearInterval(timerId.current)
    }
    timerId.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerId.current)
          setGameOver(true)
          return 0
        }
        return prevTime - 1
      })
    }, 1000)
  }

  return (
    <>
      <h2 className="text-center">Vimulator: Get to the X!</h2>
      {!gameOver &&
        <>
          <h4 className="text-center">Score: {score}</h4>
          <h5 className="text-center">Time Left: {timeLeft}s </h5>
        </>
      }
      {gameOver && (
        <>
          <h3 className="text-center">Game Over!</h3>
          <h4 className="text-center">Final score: {score}</h4>
          <button className="btn btn-primary mx-auto mb-2" onClick={restartGame}>Play Again</button>
        </>
      )}
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