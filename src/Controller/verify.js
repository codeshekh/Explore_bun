import { authenticator } from "otplib";
import User from '../models/Auth_models.js';  // Fixed import path

async function VerifyOTP(email, otp) {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('User not found');
    }

    // Log the generated OTP and received OTP for debugging
    const generatedOtp = authenticator.generate(user.secret);
    console.log(`Generated OTP for user: ${generatedOtp}`);
    console.log(`Received OTP: ${otp}`);

    const isOtpValid = authenticator.verify({ token: otp, secret: user.secret });

    if (!isOtpValid) {
        throw new Error('Invalid OTP');
    }

    return { message: 'MFA login successful' };
}


export { VerifyOTP };
