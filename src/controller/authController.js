const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const register = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        // Validate input
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required." });
        }

        if (typeof email !== "string" || !email.trim()) {
            return res.status(400).json({ message: "A valid email is required." });
        }

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use." });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            role: role || "user",
        });

        await newUser.save();
        res.status(201).json({ message: `User registered with username ${username}` });
    } catch (err) {
        console.error("Error during registration:", err);
        res.status(500).json({ message: "Something went wrong", error: err.message });
    }
};

const login = async (req, res) => {
    try {
        const { credential, password } = req.body;

        // Validate input
        if (!credential || !password) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Find user by username or email
        const user = await User.findOne({
            $or: [{ username: credential }, { email: credential }],
        });

        if (!user) {
            return res.status(404).json({ message: "Invalid username or email." });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username/email or password." });
        }

        // Generate JWT token with user ID and role
        if (!process.env.JWT_SECRET) {
            console.error("JWT_SECRET is not defined in the environment variables.");
            return res.status(500).json({ message: "Internal server error" });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        // Respond with token and role
        return res.json({
            token,
            role: user.role,
            userId: user._id, // Include userId in the response
          });
    } catch (err) {
        console.error("Error during login:", err); // Log the error for debugging
        res.status(500).json({ message: "Something went wrong", error: err.message });
    }
};

module.exports = {
    register,
    login,
};
