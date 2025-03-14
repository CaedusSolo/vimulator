import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className="content-container landing-page">
      <h2 className="text-center">Welcome to Vimulator</h2>
      <h3 className="text-center">Practice Vim commands here</h3>
      <div className="btn-container">
        <button className="btn">
          <Link to="/game" className="link">Game</Link>
        </button>
        <button className="btn">
          <Link to="/leaderboard" className='link'>Leaderboard</Link>
        </button>
      </div>
    </div>
  )
}

export default LandingPage