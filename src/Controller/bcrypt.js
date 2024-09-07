import bcrypt from 'bcrypt';
import User from '../models/Auth_models.js';  // Fixed import path
import { authenticator } from 'otplib';

async function register(email, password) {
    try {
        const passwordHash = await bcrypt.hash(password, 10);  // Corrected field name

        const secret = authenticator.generateSecret();  // Generate OTP secret

        const newUser = new User({
            email,
            passwordHash,  // Corrected field name
            secret,
        });
        await newUser.save();
        console.log(`User ${email} is successfully registered`);
        return newUser;
    } catch (err) {
        console.error('Error registering user:', err);
        throw err;
    }
}

// Login user and generate OTP
async function loginUser(email, password) {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);  // Corrected field name

    if (!isPasswordValid) {
        throw new Error('Password is incorrect');
    }

    // Generate OTP
    const otp = authenticator.generate(user.secret);
    console.log(`Your OTP is: ${otp}`);

    return { message: 'Password is valid, OTP has been sent.' };
}

export { register, loginUser };
