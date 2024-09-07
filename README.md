
# Two-Factor Authentication System with Node.js and Bun

This project demonstrates a simple Two-Factor Authentication (2FA) system using **Node.js**, **MongoDB**, and **OTPLib** for generating and verifying Time-based One-Time Passwords (TOTP). It includes user registration, login, and OTP verification features. This setup uses **Bun** as the JavaScript runtime.

## Features
- **User Registration**: Users can register with an email and password.
- **Login with Password Verification**: After login, the user receives a one-time password (OTP).
- **OTP Verification**: Users must verify the OTP to complete the login process.
- **Password Hashing**: Passwords are hashed using **bcrypt** for security.
- **MongoDB**: Used for storing user credentials and OTP secrets.

## Prerequisites
- **Bun** (v0.7.0 or later)
- **Node.js** (v14 or later) [Optional: Required for Bun if you need Node.js runtime]
- **MongoDB** (Running locally or on a server)
- **Bun** or **npm** (for package management)

## Setup

### 1. Clone the repository
```bash
git clone https://github.com/codeshekh/Explore_bun.git
cd two-factor-auth-system
```

### 2. Install Dependencies

Ensure you have **Bun** installed. If not, install it from [Bun's official site](https://bun.sh/).

Install dependencies using Bun:
```bash
bun install
```
Install all further dependencies using 
```
bun add bcrypt body-parser express jsonwebtoken mongoose nodemailer otplib
```
mongodbUrl=mongodb://localhost:27017/yourdbname
PORT=3000


Replace `yourdbname` with your actual MongoDB database name.

### 4. Start the Server

Run the server using Bun:
```bash
bun run start
```

The server will start on `http://localhost:3000`.

## API Endpoints

### 1. **Register User**

**Endpoint:** `/api/register`  
**Method:** `POST`

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

**Response:**
```json
{
  "message": "User registered successfully"
}
```

### 2. **Login User**

**Endpoint:** `/api/login`  
**Method:** `POST`

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

**Response:**
```json
{
  "message": "Password is valid, OTP has been sent."
}
```

### 3. **Verify OTP**

**Endpoint:** `/api/verify-otp`  
**Method:** `POST`

**Request Body:**
```json
{
  "email": "user@example.com",
  "otp": "123456"
}
```

**Response:**
```json
{
  "message": "MFA login successful"
}
```

### 4. **Error Handling**

If the OTP is invalid or expired, the response will be:
```json
{
  "error": "Invalid OTP"
}
```

## Troubleshooting

- **Invalid OTP**: Ensure that the OTP sent and the OTP entered are correct. Check if there’s a time drift between the server and the OTP generator.
- **404 Not Found**: Verify that the endpoints are correctly defined and that the server is running.

## License

This project is licensed under the MIT License.

## Contributing

Feel free to submit issues, fork the repository, and create pull requests.

## Contact

For any questions, please contact [your-email@example.com](mailto:your-email@example.com).

---

This documentation provides a comprehensive guide to setting up and using your 2FA system with Bun. Adjust the email, MongoDB URI, and any other placeholders according to your setup.
