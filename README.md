# 🏨 Royal Family Hotel 2026 — Full Stack Application

تطبيق فندق رويال فاميلي كامل مع **React Frontend** و **Node.js/Express Backend** و **MongoDB Database**

## ✨ المميزات

✅ **تسجيل دخول وإنشاء حساب**  
✅ **عرض الغرف المتاحة**  
✅ **حجز الغرف مع حساب التكلفة**  
✅ **إدارة الحجوزات**  
✅ **نقاط الولاء والإحصائيات**  
✅ **مستجيب على الموبايل (Mobile-First)**  
✅ **API RESTful كاملة**  
✅ **توثيق JWT**  

---

## 📋 المتطلبات

- **Node.js** v14+
- **MongoDB** محلي أو MongoDB Atlas
- **npm** أو **yarn**

---

## 🚀 التثبيت والتشغيل

### 1️⃣ تثبيت تبعيات Backend

```bash
cd backend
npm install
```

### 2️⃣ تثبيت تبعيات Frontend

```bash
cd frontend
npm install
```

---

## ⚙️ الإعدادات

### Backend (.env)

```
MONGODB_URI=mongodb://localhost:27017/royal-family-hotel
PORT=5000
JWT_SECRET=your_jwt_secret_key_change_in_production
NODE_ENV=development
```

### Frontend (المشروع الحالي)

تعديل `API_BASE_URL` في `frontend/src/services/api.js`:

```javascript
const API_BASE_URL = 'http://localhost:5000/api';
```

---

## 🔧 التشغيل

### Backend (Terminal 1)

```bash
cd backend
npm run dev
```

السيرفر سيعمل على: **http://localhost:5000**

### Frontend (Terminal 2)

```bash
cd frontend
npm start
```

التطبيق سيفتح على: **http://localhost:3000**

---

## 📱 الواجهة

### الصفحات الرئيسية
- **الرئيسية** - تسجيل الدخول وتسجيل الحساب
- **الغرف** - عرض الغرف وحجزها
- **حجوزاتي** - عرض الحجوزات السابقة
- **من نحن** - معلومات الفندق

### التوافقية
- ✅ الموبايل (320px+)
- ✅ التابلت (768px+)
- ✅ سطح المكتب (1024px+)

---

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - إنشاء حساب
- `POST /api/auth/login` - تسجيل الدخول

### Rooms
- `GET /api/rooms` - عرض جميع الغرف
- `GET /api/rooms/:id` - الحصول على غرفة
- `POST /api/rooms` - إنشاء غرفة (Admin)
- `PUT /api/rooms/:id` - تحديث غرفة (Admin)
- `DELETE /api/rooms/:id` - حذف غرفة (Admin)

### Bookings
- `POST /api/bookings` - إنشاء حجز
- `GET /api/bookings` - عرض حجوزاتي
- `DELETE /api/bookings/:id` - إلغاء حجز

### Users
- `GET /api/users/profile` - البروفايل
- `PUT /api/users/profile` - تحديث البروفايل

---

## 🗄️ Database

### Models
- **User** - المستخدمين
- **Room** - الغرف
- **Booking** - الحجوزات

---

## 🎨 التخصيص

### الألوان
```css
--gold: #d4af37
--charcoal: #1a1a1a
--white: #ffffff
```

تعديل المتغيرات في `frontend/src/index.css`

---

## 🔐 الأمان

⚠️ **للإنتاج:**
- تغيير `JWT_SECRET` في `.env`
- استخدام HTTPS
- تفعيل CORS بشكل صحيح
- استخدام متغيرات البيئة الآمنة

---

## 📝 الترخيص

جميع الحقوق محفوظة © 2026 Royal Family Hotel

---

## 👨‍💻 قام بالتطوير

تم بناء هذا المشروع بـ:
- React ⚛️
- Node.js
- Express
- MongoDB
- CSS3 (Mobile-First)

---

## 🤝 الدعم

للمساعدة أو الإبلاغ عن مشاكل، يرجى التواصل: info@royalfamily.com
