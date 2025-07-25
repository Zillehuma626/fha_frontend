const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contact');
const getMyCodeRoutes = require('./routes/getMyCode'); // ✅ new

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
const allowedOrigins = [
  "https://your-frontend.onrender.com", // Replace with your actual frontend URL
  "http://localhost:5713"               // Keep for local development
];
app.use(express.json());
app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true // If using cookies/auth, optional
}));
app.use('/api/contact', contactRoutes);
app.use('/api/get-my-code', getMyCodeRoutes); // ✅ new

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Connected to MongoDB Atlas');
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
})
.catch((error) => console.error('MongoDB connection error:', error));



