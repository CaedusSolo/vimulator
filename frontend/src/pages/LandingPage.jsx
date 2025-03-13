import React from 'react'

function LandingPage() {
  return (
    <div className="content-container landing-page">
      <h2 className="text-center">Welcome to Vimulator</h2>   
      <h3 className="text-center">Practice Vim commands here</h3>
      <div className="btn-container">
        <button className="btn">Game</button>
        <button className="btn">Leaderboard</button>
      </div>
    </div>
  )
}

export default LandingPage