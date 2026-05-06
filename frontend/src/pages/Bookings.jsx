import React, { useState, useEffect } from 'react';
import { getUserBookings } from '../services/api';
import '../styles/Bookings.css';

function Bookings({ onNavigate, isLoggedIn }) {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isLoggedIn) {
      fetchBookings();
    }
  }, [isLoggedIn]);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem('token');
      const data = await getUserBookings(token);
      setBookings(data);
    } catch (err) {
      setError('فشل تحميل الحجوزات');
    } finally {
      setLoading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="bookings-page">
        <h1>يرجى تسجيل الدخول</h1>
        <p>سجل دخولك لمشاهدة حجوزاتك</p>
      </div>
    );
  }

  if (loading) return <div className="loading">جاري التحميل...</div>;

  return (
    <div className="bookings-page">
      <h1>حجوزاتي</h1>
      {error && <div className="error-msg">{error}</div>}
      {bookings.length === 0 ? (
        <p>لا وجود لحجوزات حالياً</p>
      ) : (
        <div className="bookings-list">
          {bookings.map((booking) => (
            <div key={booking._id} className="booking-card">
              <h3>الغرفة {booking.roomId?.roomNumber}</h3>
              <p>📅 من {new Date(booking.checkInDate).toLocaleDateString('ar')} إلى {new Date(booking.checkOutDate).toLocaleDateString('ar')}</p>
              <p>🌙 {booking.nights} ليلة</p>
              <p>💰 ${booking.totalPrice}</p>
              <span className={`status ${booking.status}`}>{booking.status === 'confirmed' ? 'مؤكد ✓' : 'ملغى'}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Bookings;
