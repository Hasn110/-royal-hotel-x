# 🚀 دليل التشغيل السريع

## المتطلبات المسبقة
- ✅ Node.js مثبت
- ✅ MongoDB مشغل (محلي أو MongoDB Atlas)

---

## خطوات التثبيت والتشغيل

### 1️⃣ نسخ ملفات المشروع
```bash
cd /path/to/new royal
```

### 2️⃣ تثبيت Backend
```bash
cd backend
npm install
```

**أضف تبعيات MongoDB إذا لم تكن موجودة:**
```bash
npm install mongodb mongoose
```

### 3️⃣ تثبيت Frontend (React)
```bash
cd ../frontend
npm install
```

### 4️⃣ إضافة البيانات الاختبارية (اختياري)
```bash
cd ../backend
node scripts/seedRooms.js
```

---

## ▶️ التشغيل

**افتح Terminal 1 (Backend):**
```bash
cd backend
npm run dev
```
✅ السيرفر على: **http://localhost:5000**

**افتح Terminal 2 (Frontend):**
```bash
cd frontend
npm start
```
✅ التطبيق على: **http://localhost:3000**

---

## 🧪 اختبار الوظائف

### 1. تسجيل حساب جديد
```
البريد: test@example.com
كلمة المرور: password123
الاسم: أحمد
```

### 2. تسجيل الدخول
استخدم البيانات نفسها

### 3. حجز غرفة
- اذهب لـ "الغرف والحجز"
- اختر غرفة
- اختر التواريخ
- انقر "تأكيد الحجز"

### 4. عرض الحجوزات
- انقر على "حجوزاتي"

---

## 📱 اختبار على الموبايل

```bash
# في نفس الشبكة
# احصل على IP الكمبيوتر:
ipconfig  # Windows
ifconfig  # Mac/Linux

# ثم افتح في الموبايل:
http://YOUR_IP:3000
```

---

## 🔧 React + Node.js اختياري

إذا واجهت مشاكل في CORS:

**في backend/server.js تأكد من:**
```javascript
app.use(cors());
```

**في frontend/src/services/api.js تأكد من URL:**
```javascript
const API_BASE_URL = 'http://localhost:5000/api';
```

---

## ❌ حل المشاكل الشائعة

### Port مشغول
```bash
# تغيير PORT في .env
PORT=5001
```

### MongoDB لا يعمل
```bash
# بدء MongoDB locally (Windows)
mongod

# أو استخدم MongoDB Atlas (Cloud)
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/database
```

### React لا يفتح
```bash
# حذف node_modules والتثبيت جديد
cd frontend
rm -rf node_modules
npm install
npm start
```

---

## 📊 هيكل المشروع

```
new royal/
├── backend/
│   ├── models/          (Database schemas)
│   ├── routes/          (API endpoints)
│   ├── controllers/      (Business logic)
│   ├── middleware/       (JWT auth)
│   ├── scripts/         (Seed data)
│   └── server.js
├── frontend/
│   ├── public/          (HTML)
│   ├── src/
│   │   ├── components/   (React components)
│   │   ├── pages/       (Pages)
│   │   ├── services/    (API calls)
│   │   ├── styles/      (CSS)
│   │   └── App.jsx
│   └── package.json
├── README.md
└── QUICKSTART.md (هذا الملف)
```

---

## 🎉 تم!

الآن لديك تطبيق كامل:
- ✅ Frontend: React
- ✅ Backend: Node.js/Express
- ✅ Database: MongoDB
- ✅ API: RESTful
- ✅ Mobile: Responsive

**استمتع! 🏨**
