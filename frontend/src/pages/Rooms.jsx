import React, { useState, useEffect } from 'react';
import { getRooms, createBooking } from '../services/api';
import '../styles/Rooms.css';

function Rooms({ onNavigate, isLoggedIn }) {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const data = await getRooms();
      setRooms(data);
    } catch (err) {
      setError('فشل تحميل الغرف');
    } finally {
      setLoading(false);
    }
  };

  const handleBooking = async () => {
    if (!isLoggedIn) {
      alert('يرجى تسجيل الدخول أولاً');
      onNavigate('home');
      return;
    }

    if (!selectedRoom || !checkIn || !checkOut) {
      setError('يرجى تحديد الغرفة والتواريخ');
      return;
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));

    if (nights <= 0) {
      setError('تاريخ المغادرة يجب أن يكون بعد تاريخ الوصول');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      await createBooking(
        {
          roomId: selectedRoom._id,
          checkInDate: checkIn,
          checkOutDate: checkOut,
          nights,
        },
        token
      );
      alert('تم الحجز بنجاح!');
      setSelectedRoom(null);
      setCheckIn('');
      setCheckOut('');
    } catch (err) {
      setError(err.response?.data?.error || 'فشل الحجز');
    }
  };

  if (loading) return <div className="loading">جاري التحميل...</div>;

  return (
    <div className="rooms-page">
      <h1>الغرف المتاحة</h1>

      {error && <div className="error-msg">{error}</div>}

      <div className="rooms-grid">
        {rooms.map((room) => (
          <div key={room._id} className="room-card">
            <div className="room-header">
              <h3>الغرفة {room.roomNumber}</h3>
              <span className="room-floor">الطابق {room.floor}</span>
            </div>
            <p className="room-location">{room.location}</p>
            <p className="room-price">{room.pricePerNight}$ / ليلة</p>
            <button 
              className={`select-btn ${selectedRoom?._id === room._id ? 'selected' : ''}`}
              onClick={() => setSelectedRoom(room)}
            >
              {selectedRoom?._id === room._id ? 'محدد ✓' : 'اختر'}
            </button>
          </div>
        ))}
      </div>

      {selectedRoom && (
        <div className="booking-form">
          <h2>تفاصيل الحجز</h2>
          <div className="form-group">
            <label>تاريخ الوصول</label>
            <input 
              type="date" 
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>تاريخ المغادرة</label>
            <input 
              type="date" 
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
          <button className="book-btn" onClick={handleBooking}>
            ✦ تأكيد الحجز
          </button>
        </div>
      )}
    </div>
  );
}

export default Rooms;
