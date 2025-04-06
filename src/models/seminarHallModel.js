const mongoose = require("mongoose");

// Define the Equipment schema for embedded equipment
const equipmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  condition: { type: String, default: "Good" },
  available: { type: Boolean, default: true },
  quantity: { type: Number, default: 1 },
});

// Define the SeminarHall schema
const seminarHallSchema = new mongoose.Schema({
  name: { type: String, required: true },
  displayId: { type: Number, required: true, unique: true },
  capacity: { type: Number, required: true },
  details: { type: String },
  equipment: [equipmentSchema], 
  images: [{ type: String }],// Embedded array of equipment
  isAvailable: { type: Boolean, default: true }, // Add this field
  unavailabilityReason: { type: String } // Optional reason for unavailability
});

// Create the model
const SeminarHall = mongoose.model("SeminarHall", seminarHallSchema);

module.exports = SeminarHall;
