import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import GameBoard from './pages/GameBoard';
import AppLayout from "./components/AppLayout"
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import LandingPage from './pages/LandingPage';
import ProtectedRoute from './components/ProtectedRoute';
import LogoutPage from "./pages/LogoutPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="game" element={
            <ProtectedRoute>
              <GameBoard />
            </ProtectedRoute>
          } 
          />
          <Route path="auth">
            <Route path="login" element={<LoginPage />} />
            <Route path="sign-up" element={<SignUpPage />} />
            <Route path="logout" element={<LogoutPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;