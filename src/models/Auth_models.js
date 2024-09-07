import mongoose from 'mongoose';

const AuthSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    passwordHash: {  // Corrected field name
        type: String,
        required: true,
    },
    secret: {
        type: String, // Store the TOTP secret here
    },
    isMfaEnabled: {
        type: Boolean,
        default: true,
    },
});

const User = mongoose.model('User', AuthSchema);
export default User;
