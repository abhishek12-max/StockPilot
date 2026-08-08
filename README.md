# 🚀 StockPilot

StockPilot is a full-stack AI-powered stock trading and portfolio management platform built with the MERN stack.

It provides users with market data, stock trading simulation, portfolio tracking, watchlists, order management, AI-powered financial insights, and a PRO subscription system using Razorpay.

---

## ✨ Features

### 📈 Stock Market

- Browse and search stocks
- View current stock prices
- View company and market information
- Track market movements

### 💰 Trading

- Buy and sell stocks
- Market orders
- Automatic holding updates after completed orders
- Order history
- Portfolio profit/loss calculations

### 💼 Portfolio

- Total investment
- Current portfolio value
- Profit/Loss
- Holdings overview
- Portfolio statistics

### ⭐ Watchlist

- Add stocks to watchlist
- Remove stocks from watchlist
- Track preferred stocks

### 🤖 StockPilot AI

PRO users can use the AI-powered financial assistant for:

- 📊 Portfolio analysis
- 📈 Stock analysis
- ⚠️ Portfolio risk analysis
- 📚 Finance concepts
- 📰 Market news
- 💡 Investing guidance

AI responses are returned as structured JSON and rendered through dedicated React UI cards.

### 💳 PRO Subscription

- Free plan
- PRO plan — ₹299/month
- Razorpay checkout
- Secure payment verification
- Automatic plan upgrade after successful payment

### 🔐 Authentication

- User registration
- Email OTP verification
- Login/logout
- JWT access tokens
- JWT refresh tokens
- HTTP-only cookies
- Protected routes
- Subscription-based authorization
- Password hashing with bcrypt

---

## 🛠️ Tech Stack

### Frontend

- React
- React Router
- Tailwind CSS
- Axios
- Lucide React
- React Three Fiber
- Three.js
- Vite

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Express Validator
- Cookie Parser
- CORS

### AI & Payments

- Google Gemini API
- Razorpay

### Other

- Nodemailer / Resend
- Git & GitHub

---

## 🏗️ Project Structure

```text
StockPilot/
│
├── Frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── App.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── index.html
│
├── Backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── seed/
│   ├── utils/
│   ├── app.js
│   ├── server.js
│   └── package.json
│
└── README.md