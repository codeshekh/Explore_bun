import express from 'express';
import { loginUser } from '../Controller/bcrypt.js';
import { VerifyOTP } from '../Controller/verify.js';
import { register } from '../Controller/bcrypt.js';
const app = express();

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const response = await loginUser(email, password);
        res.status(200).json(response);
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await register(email, password);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
// Verify OTP route
app.post('/OTP-VERIFY', async (req, res) => {
    const { email, otp } = req.body;
    try {
        const response = await VerifyOTP(email, otp);
        res.status(200).json(response);
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});

export default app;
