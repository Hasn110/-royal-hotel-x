import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-page">
      <h1>من نحن</h1>
      <div className="about-content">
        <div className="about-section">
          <h2>إرث من الفخامة والضيافة</h2>
          <p>
            تأسس فندق رويال فاميلي ليكون الوجهة الأولى للباحثين عن الرقي والتميز. 
            نقدم لضيوفنا تجربة ضيافة لا تُنسى تجمع بين الأصالة والمعاصرة والتصميم الفاخر.
          </p>
        </div>
        <div className="about-section">
          <h2>خدماتنا</h2>
          <ul>
            <li>🛎️ خدمة كونسيرج ٢٤/٧</li>
            <li>🍽️ ٣ مطاعم فاخرة</li>
            <li>🏊 مسبح ذو إطلالة رائعة</li>
            <li>💆 سبا ومركز اللياقة البدنية</li>
            <li>✈️ استقبال من المطار</li>
            <li>📶 إنترنت عالي السرعة</li>
          </ul>
        </div>
        <div className="about-section">
          <h2>جوائزنا</h2>
          <p>⭐⭐⭐⭐⭐ Forbes Five Star</p>
          <p>🏆 أفضل فندق 2026</p>
          <p>🎖️ جائزة الخدمة المتميزة</p>
        </div>
      </div>
    </div>
  );
}

export default About;
