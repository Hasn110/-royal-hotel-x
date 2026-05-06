const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema(
  {
    roomNumber: { type: String, required: true, unique: true },
    floor: { type: Number, required: true },
    location: { type: String, required: true }, // e.g., "الجناح الملكي"
    description: String,
    capacity: Number,
    pricePerNight: { type: Number, required: true },
    status: { type: String, enum: ['available', 'booked', 'maintenance'], default: 'available' },
    amenities: [String], // WiFi, AC, etc.
    imageUrl: String,
    rating: { type: Number, default: 5, min: 0, max: 5 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Room', RoomSchema);
