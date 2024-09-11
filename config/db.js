const mongoose = require('mongoose');

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/paytm')
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('Connection error', err.message);
  }
};

