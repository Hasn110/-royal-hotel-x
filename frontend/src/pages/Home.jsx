import React, { useState } from 'react';
import { login, register } from '../services/api';
import '../styles/Home.css';

function Home({ onNavigate, onLogin, isLoggedIn }) {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const data = isRegister 
        ? await register({ email, password, displayName })
        : await login({ email, password });
      
      onLogin(data.user, data.token);
    } catch (err) {
      setError(err.response?.data?.error || 'خطأ في المحاولة');
    } finally {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return (
      <div className="home-page">
        <div className="hero-section">
          <h1>مرحباً بك في رويال فاميلي</h1>
          <p>أفضل فندق في القاهرة — حجز وإدارة إقامة فاخرة</p>
          <button className="cta-btn" onClick={() => onNavigate('rooms')}>
            ✦ احجز إقامتك الآن
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>✦ ROYAL FAMILY 2026 ✦</h1>
        <p>أفضل فندق — حجز وإدارة إقامة فاخرة</p>
      </div>

      <div className="auth-section">
        <div className="auth-card">
          <h2>{isRegister ? 'تسجيل حساب جديد' : 'تسجيل الدخول'}</h2>
          
          {error && <div className="error-msg">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>البريد الإلكتروني</label>
              <input 
                type="email" 
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                dir="ltr"
              />
            </div>

            <div className="form-group">
              <label>كلمة المرور</label>
              <input 
                type="password" 
                placeholder="••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength="4"
                dir="ltr"
              />
            </div>

            {isRegister && (
              <div className="form-group">
                <label>الاسم الظاهر (اختياري)</label>
                <input 
                  type="text" 
                  placeholder="مثال: أحمد"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                />
              </div>
            )}

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'جاري...' : (isRegister ? 'إنشاء الحساب' : 'دخول')}
            </button>
          </form>

          <button 
            className="toggle-btn"
            onClick={() => {
              setIsRegister(!isRegister);
              setError('');
            }}
          >
            {isRegister ? 'لديك حساب؟ دخول' : 'ليس لديك حساب؟ تسجيل'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
