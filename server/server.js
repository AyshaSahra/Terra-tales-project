const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ Define Card Schema
const cardSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    imageURL: String
});
const Card = mongoose.model('Card', cardSchema);

// ✅ Define Hidden Spot Schema
const hiddenSpotSchema = new mongoose.Schema({
    title: String,
    src: String,
    location:String,
    text: String,
});
const HiddenSpot = mongoose.model('HiddenSpot', hiddenSpotSchema, 'hidden-spots'); // Ensures correct collection name

// ✅ API Endpoint to Get Cards (UNCHANGED)
app.get('/api/cards', async (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (error) {
        res.status(500).json({ message: "Error fetching cards" });
    }
});

// ✅ API Endpoint to Get Hidden Spots (UPDATED)
app.get('/api/hidden-spots', async (req, res) => {
    try {
        const hiddenSpots = await HiddenSpot.find();
        res.json(hiddenSpots);
    } catch (error) {
        console.error("Error fetching hidden spots:", error);
        res.status(500).json({ message: "Error fetching hidden spots" });
    }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
