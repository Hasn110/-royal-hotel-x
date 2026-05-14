import React, { useState } from 'react';
import '../styles/Header.css';

function Header({ currentPage, onNavigate, isLoggedIn, userData, onLogout, onThemeChange, theme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (page) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <header className="app-header">
      <div className="header-brand">
        <button className="brand-btn" onClick={() => handleNav('home')}>
          <span className="brand-name">Royal Family</span>
          <span className="brand-sub">2026 HOTEL</span>
        </button>
      </div>

      {/* Desktop nav */}
      <nav className="header-nav">
        <button className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`} onClick={() => handleNav('home')}>الرئيسية</button>
        <button className={`nav-btn ${currentPage === 'rooms' ? 'active' : ''}`} onClick={() => handleNav('rooms')}>الغرف والحجز</button>
        <button className={`nav-btn ${currentPage === 'bookings' ? 'active' : ''}`} onClick={() => handleNav('bookings')}>حجوزاتي</button>
        <button className={`nav-btn ${currentPage === 'about' ? 'active' : ''}`} onClick={() => handleNav('about')}>من نحن</button>
      </nav>

      <div className="header-actions">
        <button className="theme-btn" onClick={onThemeChange} title={theme === 'dark' ? 'وضع فاتح' : 'وضع داكن'}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        {isLoggedIn ? (
          <div className="user-menu">
            <span className="user-name">{userData?.displayName || userData?.email}</span>
            <button className="logout-btn" onClick={onLogout}>خروج</button>
          </div>
        ) : (
          <button className="login-btn" onClick={() => handleNav('home')}>دخول</button>
        )}
        {/* Hamburger - mobile only */}
        <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="القائمة">
          <span className={`ham-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`ham-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`ham-line ${menuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="mobile-nav">
          <button className={`mobile-nav-btn ${currentPage === 'home' ? 'active' : ''}`} onClick={() => handleNav('home')}>🏠 الرئيسية</button>
          <button className={`mobile-nav-btn ${currentPage === 'rooms' ? 'active' : ''}`} onClick={() => handleNav('rooms')}>🛏️ الغرف والحجز</button>
          <button className={`mobile-nav-btn ${currentPage === 'bookings' ? 'active' : ''}`} onClick={() => handleNav('bookings')}>📋 حجوزاتي</button>
          <button className={`mobile-nav-btn ${currentPage === 'about' ? 'active' : ''}`} onClick={() => handleNav('about')}>ℹ️ من نحن</button>
        </div>
      )}
    </header>
  );
}

export default Header;
