const mongoose = require('mongoose');
require('dotenv').config();
const Room = require('../models/Room');

const seedRooms = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/royal-family-hotel');

    await Room.deleteMany({});

    const rooms = [
      {
        roomNumber: '101',
        floor: 1,
        location: 'الجناح الملكي - الشرق',
        description: 'غرفة فاخرة مع إطلالة على النيل',
        capacity: 2,
        pricePerNight: 599,
        amenities: ['WiFi', 'تكييف', 'منمنمات'],
        rating: 5,
      },
      {
        roomNumber: '102',
        floor: 1,
        location: 'الجناح الملكي - الغرب',
        description: 'غرفة مميزة مع حمام خاص',
        capacity: 2,
        pricePerNight: 699,
        amenities: ['WiFi', 'تكييف', 'جاكوزي'],
        rating: 5,
      },
      {
        roomNumber: '201',
        floor: 2,
        location: 'الجناح الرئاسي',
        description: 'جناح فاخر للعائلات',
        capacity: 4,
        pricePerNight: 999,
        amenities: ['WiFi', 'تكييف', 'مطبخ صغير'],
        rating: 5,
      },
      {
        roomNumber: '202',
        floor: 2,
        location: 'الجناح الرئاسي',
        description: 'جناح مميز مع غرفتي نوم',
        capacity: 4,
        pricePerNight: 899,
        amenities: ['WiFi', 'تكييف', 'غسالة'],
        rating: 5,
      },
      {
        roomNumber: '301',
        floor: 3,
        location: 'البنتهاوس',
        description: 'أفخم غرفة في الفندق',
        capacity: 2,
        pricePerNight: 1499,
        amenities: ['WiFi', 'تكييف', 'حمام سباحة خاص'],
        rating: 5,
      },
      {
        roomNumber: '302',
        floor: 3,
        location: 'البنتهاوس',
        description: 'غرفة ملكية مع شرفة كبيرة',
        capacity: 2,
        pricePerNight: 1399,
        amenities: ['WiFi', 'تكييف', 'شرفة بحمام'],
        rating: 5,
      },
      {
        roomNumber: '103',
        floor: 1,
        location: 'الجناح الملكي - الشمال',
        description: 'غرفة عادية مريحة',
        capacity: 2,
        pricePerNight: 399,
        amenities: ['WiFi', 'تكييف'],
        rating: 4,
      },
      {
        roomNumber: '104',
        floor: 1,
        location: 'الجناح الملكي - الجنوب',
        description: 'غرفة بسيطة اقتصادية',
        capacity: 1,
        pricePerNight: 299,
        amenities: ['WiFi', 'تكييف'],
        rating: 4,
      },
    ];

    await Room.insertMany(rooms);
    console.log('✅ تم إضافة 8 غرف بنجاح');
    mongoose.connection.close();
  } catch (error) {
    console.error('❌ خطأ:', error.message);
    mongoose.connection.close();
  }
};

seedRooms();
