const Booking = require('../models/Booking');
const Room = require('../models/Room');
const User = require('../models/User');

exports.createBooking = async (req, res) => {
  try {
    const { roomId, checkInDate, checkOutDate, nights } = req.body;
    const userId = req.userId;

    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ error: 'الغرفة غير موجودة' });
    }

    const totalPrice = room.pricePerNight * nights;

    const booking = new Booking({
      userId,
      roomId,
      checkInDate,
      checkOutDate,
      nights,
      totalPrice,
    });

    await booking.save();

    // Update user stats
    await User.findByIdAndUpdate(userId, {
      $inc: {
        loyaltyPoints: Math.floor(totalPrice / 10),
        totalSpent: totalPrice,
        bookingsCount: 1,
      },
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.userId }).populate('roomId');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, { status: 'cancelled' }, { new: true });
    
    // Refund to user
    const refundAmount = booking.totalPrice;
    await User.findByIdAndUpdate(booking.userId, {
      $inc: { totalSpent: -refundAmount },
    });

    res.json({ message: 'تم إلغاء الحجز', booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
