import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { username, first_name, last_name, email, password } = req.body;
        const userExists = await User.findOne({ email });
        
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const user = new User({
            username,
            first_name,
            last_name,
            email,
            password
        });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        if (!user.password == password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        //create session
        req.session.user = {
            id: user._id,
            username: user.username,
            email: user.email
        };
        
        res.status(200).json({ message: 'Login successful', user: req.session.user });
        
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});


export default router;