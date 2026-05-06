import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Royal Family Hotel</h4>
          <p>فندق فاخر متخصص في تقديم أفضل الخدمات</p>
        </div>
        <div className="footer-section">
          <h4>تواصل معنا</h4>
          <p>📞 +20 111 234 5678</p>
          <p>📧 info@royalfamily.com</p>
        </div>
        <div className="footer-section">
          <h4>تابعنا</h4>
          <div className="social-links">
            <a href="https://wa.me/201112345678" target="_blank" rel="noopener noreferrer">واتساب</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">انستغرام</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">فيسبوك</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Royal Family Hotel. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}

export default Footer;
