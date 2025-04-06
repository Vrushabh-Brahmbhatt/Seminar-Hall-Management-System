const express=require("express");
const verifyToken=require("../middlewares/authMiddleware");
const authorizeRoles=require("../middlewares/rolemiddleware");
const User = require("../models/userModel");
const mongoose=require("mongoose");

const router=express.Router();

router.get("/admin",verifyToken, authorizeRoles("admin"),(req,res)=>{
    res.json({message:`Welcome admin`});
});

router.get("/manager",verifyToken, authorizeRoles("admin","manager"),(req,res)=>{
    res.json({message:`Welcome manager`});
});

router.get("/user",verifyToken, authorizeRoles("admin","manager","user"),(req,res)=>{
    res.json({message:`Welcome user`});
});
router.get("/user/:userId", verifyToken, authorizeRoles("admin", "manager", "user"), async (req, res) => {
    try {
        const { userId } = req.params;
        
        // Add validation for userId
        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        // Add error handling for invalid ObjectId
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: 'Invalid user ID format' });
        }

        const userDetails = await User.findById(userId)
            .select('-password')
            .exec();

        // Handle case where user is not found
        if (!userDetails) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Match the frontend expectation with camelCase
        res.status(200).json({ userDetails });
        
    } catch (err) {
        console.error('Error fetching user details:', err);
        res.status(500).json({ 
            message: 'Server error. Could not fetch user details.',
            error: process.env.NODE_ENV === 'development' ? err.message : undefined
        });
    }
});


module.exports=router;