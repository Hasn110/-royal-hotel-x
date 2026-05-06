const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    nights: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    status: { type: String, enum: ['confirmed', 'cancelled', 'completed'], default: 'confirmed' },
    remarks: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', BookingSchema);
