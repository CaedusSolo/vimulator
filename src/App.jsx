import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import GameBoard from './pages/GameBoard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="game" element={<GameBoard />} />
          <Route path="auth">
            <Route path="login" />
            <Route path="sign-up" />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;