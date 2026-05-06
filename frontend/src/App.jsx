import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Bookings from './pages/Bookings';
import About from './pages/About';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(user));
    }
  }, []);

  const handleLogin = (user, token) => {
    setIsLoggedIn(true);
    setUserData(user);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    setCurrentPage('rooms');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} onLogin={handleLogin} isLoggedIn={isLoggedIn} />;
      case 'rooms':
        return <Rooms onNavigate={setCurrentPage} isLoggedIn={isLoggedIn} />;
      case 'bookings':
        return <Bookings onNavigate={setCurrentPage} isLoggedIn={isLoggedIn} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} onLogin={handleLogin} isLoggedIn={isLoggedIn} />;
    }
  };

  return (
    <div className={`app app--${theme}`}>
      <Header 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        isLoggedIn={isLoggedIn}
        userData={userData}
        onLogout={handleLogout}
        onThemeChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        theme={theme}
      />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
