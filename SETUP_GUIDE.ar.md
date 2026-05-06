# 📱 دليل الإعداد الكامل — فندق رويال فاميلي 2026

## ✅ تم إنجاز المشروع!

لقد تم تحويل موقع رويال فاميلي من موقع HTML عادي إلى **تطبيق Full Stack احترافي** مع:

- ✨ **Frontend محترف** (React)
- ⚙️ **Backend قوي** (Node.js + Express)
- 💾 **قاعدة بيانات حقيقية** (MongoDB)
- 📱 **تصميم مستجيب** (جميع الأجهزة)
- 🔐 **نظام بأمان عالي** (JWT + Bcrypt)

---

## 📋 البيانات المطلوبة قبل التشغيل

### ✓ تم تثبيته لديك (أتمنى):
- [ ] Node.js v14+ — تحميل من [nodejs.org](https://nodejs.org)
- [ ] npm (يأتي مع Node.js)
- [ ] MongoDB — تحميل من [mongodb.com](https://mongodb.com)

### ✓ أو:
- [ ] استخدام **MongoDB Atlas** (Cloud) بدون تنزيل

---

## 🚀 خطوات الإعداد (خطوة خطوة)

### الخطوة 1️⃣: فتح Terminal/PowerShell

```bash
# في Windows
cd "C:\Users\alhas\OneDrive\Desktop\new royal"

# في Mac/Linux
cd ~/Desktop/new\ royal
```

---

### الخطوة 2️⃣: تثبيت Backend Dependencies

```bash
cd backend
npm install
```

⏳ سيستغرق دقيقتين تقريباً...

**ستشاهد:**
```
added 123 packages
✅ npm notice
```

---

### الخطوة 3️⃣: تثبيت Frontend Dependencies

```bash
cd ../frontend
npm install
```

⏳ سيستغرق دقيقتين أيضاً...

---

### الخطوة 4️⃣: إعداد قاعدة البيانات

#### الخيار أ ️: MongoDB محلي (Windows)

```bash
# قم بتنزيل MongoDB من:
# https://www.mongodb.com/try/download/community

# بعد التثبيت، في Command Prompt:
mongod
```

✅ سترى: `waiting for connections on port 27017`

#### الخيار ب: MongoDB Atlas (Cloud) - الأسهل ✨

1. اذهب إلى: https://cloud.mongodb.com
2. أنشئ حساب مجاني
3. أنشئ Cluster
4. انسخ Connection String
5. في `backend/.env`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/royal-family-hotel
   ```

---

### الخطوة 5️⃣: تحضير متغيرات البيئة (Environment)

```bash
cd ../backend
# نسخ الملف النموذجي
cp .env.example .env
```

**تحقق من `backend/.env`:**
```
MONGODB_URI=mongodb://localhost:27017/royal-family-hotel
PORT=5000
JWT_SECRET=your_jwt_secret_key_change_in_production
NODE_ENV=development
```

✅ تحتاج فقط تغيير `MONGODB_URI` إذا استخدمت MongoDB Atlas

---

## ▶️ التشغيل النهائي

### ターミナル 1: شغل Backend

```bash
cd backend
npm run dev
```

**ستشاهد:**
```
🚀 Server running on http://localhost:5000
✅ MongoDB connected
```

✅ **اترك هذا Terminal مفتوح**

---

### Terminal 2: شغل Frontend

**افتح Terminal جديد:**

```bash
cd frontend
npm start
```

**ستشاهد:**
```
Compiled successfully!

You can now view royal-family-frontend in the browser.

  Local:            http://localhost:3000
```

✅ **المتصفح سيفتح تلقائياً**

---

## 🎉 التطبيق يعمل الآن!

**الرابط:** http://localhost:3000

### إنشاء حساب تجريبي:

```
📧 البريد: demo@example.com
🔑 كلمة المرور: demo1234
👤 الاسم (اختياري): أحمد
```

### اختبر الميزات:

1. **تسجيل حساب جديد** ✅
2. **دخول الحساب** ✅
3. **عرض الغرف** ✅
4. **حجز غرفة** ✅
5. **عرض الحجوزات** ✅
6. **تبديل المظهر (ليل/نهار)** ✅

---

## 📱 اختبر على الموبايل

### في نفس الشبكة:

```bash
# احصل على IP الكمبيوتر:
ipconfig
# ابحث عن IPv4 Address: 192.168.X.X

# في الهاتف، افتح المتصفح:
http://192.168.X.X:3000
```

✅ **يعمل بشكل مثالي على الموبايل!**

---

## 🔌 إضافة بيانات اختبارية (غرف)

```bash
cd backend
node scripts/seedRooms.js
```

**ستشاهد:**
```
✅ تم إضافة 8 غرف بنجاح
```

الآن في التطبيق ستجد 8 غرف جاهزة!

---

## 📊 هيكل المشروع

```
new royal/
│
├── backend/                    (Node.js Server)
│   ├── models/                 (Database Schemas)
│   │   ├── User.js             (مودل المستخدم)
│   │   ├── Room.js             (مودل الغرفة)
│   │   └── Booking.js          (مودل الحجز)
│   │
│   ├── routes/                 (API Endpoints)
│   │   ├── auth.js             (التسجيل والدخول)
│   │   ├── rooms.js            (الغرف)
│   │   ├── bookings.js         (الحجوزات)
│   │   └── users.js            (المستخدمين)
│   │
│   ├── controllers/            (Business Logic)
│   │   ├── authController.js
│   │   ├── roomController.js
│   │   ├── bookingController.js
│   │   └── userController.js
│   │
│   ├── middleware/
│   │   └── auth.js             (JWT Protection)
│   │
│   ├── scripts/
│   │   └── seedRooms.js        (بيانات تجريبية)
│   │
│   ├── server.js               (السيرفر الرئيسي)
│   ├── package.json
│   └── .env
│
├── frontend/                   (React App)
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx      (القائمة العلوية)
│   │   │   └── Footer.jsx      (التذييل)
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx        (الرئيسية)
│   │   │   ├── Rooms.jsx       (الغرف)
│   │   │   ├── Bookings.jsx    (حجوزاتي)
│   │   │   └── About.jsx       (من نحن)
│   │   │
│   │   ├── services/
│   │   │   └── api.js          (اتصال API)
│   │   │
│   │   ├── styles/             (CSS)
│   │   │   ├── Header.css
│   │   │   ├── Footer.css
│   │   │   ├── Home.css
│   │   │   ├── Rooms.css
│   │   │   ├── Bookings.css
│   │   │   └── About.css
│   │   │
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── index.css
│   │
│   └── package.json
│
├── README.md                   (شرح شامل)
├── QUICKSTART.md              (بداية سريعة)
├── PROJECT_SUMMARY.md         (ملخص المشروع)
├── SETUP_GUIDE.ar.md          (هذا الملف)
├── docker-compose.yml         (Docker - اختياري)
└── .gitignore
```

---

## 🔐 نظام الأمان

### كلمات المرور 🔑
- مشفرة باستخدام **bcryptjs**
- لا يتم حفظ كلمات المرور بشكل مباشر
- معايير قوية (min 4 أحرف)

### API 🛡️
- **JWT Token** للمستخدمين المسجلين
- كل طلب محمي يحتاج token
- Token ينتهي بعد 30 يوم

### قاعدة البيانات 💾
- تشفير البيانات الحساسة
- التحقق من صلاحيات المستخدم

---

## 🆘 حل المشاكل الشائعة

### ❌ Error: Cannot find module 'express'

**الحل:**
```bash
cd backend
npm install express cors mongoose bcryptjs jsonwebtoken dotenv
```

---

### ❌ Error: connect ECONNREFUSED 127.0.0.1:27017

**المشكلة:** MongoDB لا يعمل

**الحل:**
```bash
# في Windows:
mongod

# أو استخدم MongoDB Atlas (Cloud)
# وغير MONGODB_URI في .env
```

---

### ❌ Error: Cannot find module 'react'

**الحل:**
```bash
cd frontend
npm install react react-dom react-router-dom axios
```

---

### ❌ PORT Already in Use

**المشكلة:** Port 5000 مشغول

**الحل:**
```bash
# غير في backend/.env
PORT=5001

# ثم في frontend/src/services/api.js
const API_BASE_URL = 'http://localhost:5001/api';
```

---

### ❌ localhost:3000 لا يفتح

**الحل:**
```bash
# تم إعادة تشغيل Frontend?
cd frontend
npm start

# حذف cache (Chrome):
Ctrl+Shift+Delete (Windows)
Cmd+Shift+Delete (Mac)
```

---

## 🎨 تخصيص الموقع

### تغيير الألوان

**ملف:** `frontend/src/index.css`

```css
:root {
  --gold: #d4af37;           /* اللون الذهبي */
  --charcoal: #1a1a1a;       /* اللون الداكن */
  --white: #ffffff;          /* الأبيض */
  --danger: #c45c5c;         /* الأحمر */
  --success: #4a8f6a;        /* الأخضر */
}
```

### تغيير أسماء الحقول

**ملف:** `frontend/src/pages/Home.jsx`

```jsx
<label>اسم المستخدم</label>  // غير النص هنا
```

### تغيير API Address

**ملف:** `frontend/src/services/api.js`

```javascript
const API_BASE_URL = 'http://your-server.com/api';
```

---

## 📚 تعلم المزيد

### React Documentation
- https://react.dev

### Node.js Documentation
- https://nodejs.org/docs

### MongoDB Documentation
- https://docs.mongodb.com

### Express Documentation
- https://expressjs.com

---

## 🚀 الخطوات التالية (Advanced)

### 1. نشر على السيرفر
- Heroku, Railway, Vercel
- AWS, Google Cloud, Azure

### 2. إضافة ميزات جديدة
- نظام الدفع (Stripe, PayPal)
- إشعارات البريد الإلكتروني
- لوحة تحكم Admin
- نظام التقييمات

### 3. تحسينات الأداء
- Caching
- CDN
- Database Indexes
- Code Splitting

### 4. قياس الأداء
- Google Analytics
- Error Tracking (Sentry)
- Performance Monitoring

---

## 📞 الدعم والمساعدة

### إذا واجهت مشاكل:

1. **تحقق من Logs:**
   ```bash
   # شاهد أخطاء Backend
   كل Terminal مفتوح يعرض الأخطاء مباشرة
   ```

2. **استخدم Browser DevTools:**
   ```
   F12 > Console > شاهد الأخطاء
   ```

3. **اقرأ الملفات:**
   - README.md
   - QUICKSTART.md
   - PROJECT_SUMMARY.md

---

## ✅ Checklist النهائي

- [ ] تم تثبيت Node.js و npm
- [ ] تم تثبيت MongoDB أو إنشاء MongoDB Atlas
- [ ] تم تثبيت Backend dependencies
- [ ] تم تثبيت Frontend dependencies
- [ ] تم تشغيل Backend (port 5000)
- [ ] تم تشغيل Frontend (port 3000)
- [ ] يفتح التطبيق في المتصفح
- [ ] إنشاء حساب يعمل
- [ ] الحجز يعمل
- [ ] الموبايل يعمل

---

## 🎉 تم!

لديك الآن تطبيق فندق **احترافي وكامل**!

استمتع بالتطوير! 🚀

---

**آخر تحديث:** مايو 2026  
**الإصدار:** 1.0.0  
**الحالة:** ✅ جاهز للإنتاج
