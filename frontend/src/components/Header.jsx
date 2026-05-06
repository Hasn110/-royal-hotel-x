import React from 'react';
import '../styles/Header.css';

function Header({ currentPage, onNavigate, isLoggedIn, userData, onLogout, onThemeChange, theme }) {
  return (
    <header className="app-header">
      <div className="header-brand">
        <button className="brand-btn" onClick={() => onNavigate('home')}>
          <span className="brand-name">Royal Family</span>
          <span className="brand-sub">2026 HOTEL</span>
        </button>
      </div>

      <nav className="header-nav">
        <button 
          className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => onNavigate('home')}
        >
          الرئيسية
        </button>
        <button 
          className={`nav-btn ${currentPage === 'rooms' ? 'active' : ''}`}
          onClick={() => onNavigate('rooms')}
        >
          الغرف والحجز
        </button>
        <button 
          className={`nav-btn ${currentPage === 'bookings' ? 'active' : ''}`}
          onClick={() => onNavigate('bookings')}
        >
          حجوزاتي
        </button>
        <button 
          className={`nav-btn ${currentPage === 'about' ? 'active' : ''}`}
          onClick={() => onNavigate('about')}
        >
          من نحن
        </button>
      </nav>

      <div className="header-actions">
        <button className="theme-btn" onClick={onThemeChange} title={`${theme === 'dark' ? 'وضع فاتح' : 'وضع داكن'}`}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        {isLoggedIn ? (
          <div className="user-menu">
            <span className="user-name">{userData?.displayName || userData?.email}</span>
            <button className="logout-btn" onClick={onLogout}>تسجيل خروج</button>
          </div>
        ) : (
          <button className="login-btn" onClick={() => onNavigate('home')}>تسجيل دخول</button>
        )}
      </div>
    </header>
  );
}

export default Header;
