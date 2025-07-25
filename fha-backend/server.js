const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contact');
const getMyCodeRoutes = require('./routes/getMyCode'); // ✅ new

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
const allowedOrigins = [
  "https://fhaaccountants.co.uk",      // ✅ Your actual frontend domain
  "http://localhost:5713",
  "https://www.fhaaccountants.co.uk",
  undefined
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
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



