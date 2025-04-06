const express = require("express");
const mongoose = require("mongoose");
const SeminarHall = require("../models/seminarHallModel");
const router = express.Router();
const seedDatabase = require("../config/seedSeminarHall");
// Get all seminar halls
router.get("/", async (req, res) => {
  try {
    const seminarHalls = await SeminarHall.find();
    res.json(seminarHalls);
  } catch (err) {
    res.status(500).json({ message: "Error fetching seminar halls", error: err });
  }
});

// Get a single seminar hall by displayId
router.get("/:id", async (req, res) => {
  try {
    const hallId = req.params.id;

    const hall = await SeminarHall.findById(hallId);

    if (!hall) {
      return res.status(404).json({ message: "Seminar hall not found" });
    }

    const halls = await SeminarHall.find();
    const displayId = halls.findIndex((h) => h._id.toString() === hall._id.toString()) + 1;

    const hallWithDisplayId = {
      ...hall.toObject(),
      displayId,
    };

    res.status(200).json(hallWithDisplayId);
  } catch (err) {
    console.error("Error fetching seminar hall:", err);
    res.status(500).json({ message: "Error fetching seminar hall", error: err.message });
  }
});

// Get seminar halls with specific equipment condition (optional)
router.get("/equipment/:condition", async (req, res) => {
  try {
    const seminarHalls = await SeminarHall.find({
      "equipment.condition": req.params.condition,
    });
    if (!seminarHalls.length) {
      return res.status(404).json({ message: "No seminar halls found with this equipment condition" });
    }
    res.json(seminarHalls);
  } catch (err) {
    res.status(500).json({ message: "Error fetching seminar halls by equipment condition", error: err });
  }
});

// Update equipment availability in a seminar hall


// @route   PATCH /api/seminar-halls/:hallId/equipment/:equipmentId
// @desc    Update equipment availability status
// @access  Private
router.patch('/:hallId/equipment/:equipmentId', async (req, res) => {
    try {
        const { hallId, equipmentId } = req.params;
        const { available } = req.body;

        // Input validation
        if (available === undefined) {
            return res.status(400).json({ 
                success: false, 
                message: 'Available status is required' 
            });
        }

        // Find and update the equipment status
        const hall = await SeminarHall.findOneAndUpdate(
            {
                _id: hallId,
                'equipment._id': equipmentId
            },
            {
                $set: {
                    'equipment.$.available': available
                }
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!hall) {
            return res.status(404).json({ 
                success: false, 
                message: 'Seminar hall or equipment not found' 
            });
        }

        // Find the updated equipment
        const updatedEquipment = hall.equipment.find(
            equip => equip._id.toString() === equipmentId
        );

        return res.status(200).json({
            success: true,
            message: 'Equipment status updated successfully',
            equipment: updatedEquipment
        });

    } catch (error) {
        console.error('Error updating equipment:', error);
        return res.status(500).json({ 
            success: false,
            message: 'Server error while updating equipment',
            error: error.message 
        });
    }
});

// Add this route to update availability (admin only)
router.patch("/:id/availability", async (req, res) => {
  try {
    const { isAvailable, unavailabilityReason } = req.body;
    const hallId = req.params.id;

    const hall = await SeminarHall.findById(hallId);
    if (!hall) {
      return res.status(404).json({ message: "Seminar hall not found" });
    }

    hall.isAvailable = isAvailable;
    hall.unavailabilityReason = unavailabilityReason;
    await hall.save();

    res.status(200).json({
      message: `Seminar hall ${isAvailable ? 'enabled' : 'disabled'} successfully`,
      hall
    });
  } catch (err) {
    res.status(500).json({ message: "Error updating seminar hall availability", error: err.message });
  }
});


module.exports = router;
