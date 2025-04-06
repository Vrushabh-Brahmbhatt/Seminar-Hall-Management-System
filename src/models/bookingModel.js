const mongoose = require('mongoose');

// Event Coordinator schema for embedded coordinators
const eventCoordinatorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  
});

const bookingSchema = new mongoose.Schema({
  seminarHallId: { type: mongoose.Schema.Types.ObjectId, ref: 'SeminarHall', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  eventName: { type: String, required: true },
  eventDetails: { type: String, required: true },
  bookingDate: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  eventCoordinators: [eventCoordinatorSchema],  // Array of event coordinators
  status: {
    type: String,
    enum: ['pending', 'approved_by_manager', 'approved_by_admin', 'booked', 'rejected_by_manager','rejected_by_admin'],
    default: 'pending',
  },
  managerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rejectionReason: {
    type: String,
    default: null
  },
  specialEquipmentRequests: { 
    type: String,
    default: '' 
  }
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;


