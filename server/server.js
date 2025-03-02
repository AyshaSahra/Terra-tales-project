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
    location: String,
    description: String,
    imageURL: String,
    landingDescription: String,
});
const Card = mongoose.model('Card', cardSchema, 'cards');

// ✅ Define Itinerary Card Schema
const itineraryCardSchema = new mongoose.Schema({
    title: { type: String, required: true },  // Itinerary title
    location: { type: String, required: true },  // Itinerary location
    text: { type: String, required: true },  // Description of the itinerary
    src: { type: String, required: true },  // Main image URL for itinerary
    days: [{ type: String, required: true }],  // Just store the list of days (e.g., "Day 1", "Day 2")
});
const ItineraryCard = mongoose.model('ItineraryCard', itineraryCardSchema, 'itinerary-cards');

// ✅ Define Hidden Spot Schema
const hiddenSpotSchema = new mongoose.Schema({
    title: String,
    src: String,
    location: String,
    text: String,
});
const HiddenSpot = mongoose.model('HiddenSpot', hiddenSpotSchema, 'hidden-spots');

// ✅ API Endpoint to Get Cards
app.get('/api/cards', async (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (error) {
        res.status(500).json({ message: "Error fetching cards" });
    }
});

// ✅ API Endpoint to Get Itinerary Cards
app.get('/api/itinerary-cards', async (req, res) => {
    try {
        const itineraryCards = await ItineraryCard.find();
        res.json(itineraryCards);
    } catch (error) {
        res.status(500).json({ message: "Error fetching itinerary cards" });
    }
});

// ✅ API Endpoint to Search Cards by Title or Location
app.get('/api/cards/search', async (req, res) => {
    const { query } = req.query;
    if (!query) {
        return res.status(400).json({ message: "Search query is required" });
    }

    try {
        const searchResults = await Card.find({
            $or: [
                { title: { $regex: query, $options: "i" } },
                { location: { $regex: query, $options: "i" } }
            ]
        });

        res.json(searchResults);
    } catch (error) {
        console.error("Error fetching search results:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.get('/api/cards/:id', async (req, res) => {
    try {
        const cardId = req.params.id;
        const card = await Card.findById(cardId);  // Ensure this uses your MongoDB model

        if (!card) {
            return res.status(404).json({ message: "Destination not found" });
        }

        res.json(card);
    } catch (error) {
        console.error("Error fetching destination:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// ✅ API Endpoint to Get a Hidden Spot by ID
app.get('/api/hidden-spots/:id', async (req, res) => {
    try {
        const hiddenSpot = await HiddenSpot.findById(req.params.id);
        if (!hiddenSpot) {
            return res.status(404).json({ message: "Hidden spot not found" });
        }
        res.json(hiddenSpot);
    } catch (error) {
        console.error("Error fetching hidden spot:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// ✅ API Endpoint to Search Hidden Spots
app.get('/api/hidden-spots/search', async (req, res) => {
    const { query } = req.query;
    if (!query) {
        return res.status(400).json({ message: "Search query is required" });
    }

    try {
        const searchResults = await HiddenSpot.find({
            $or: [
                { title: { $regex: query, $options: "i" } },
                { location: { $regex: query, $options: "i" } }
            ]
        });

        res.json(searchResults);
    } catch (error) {
        console.error("❌ Error fetching search results:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

app.get('/api/itinerary-cards/:id', async (req, res) => {
    try {
        const itinerary = await ItineraryCard.findById(req.params.id);
        if (!itinerary) {
            return res.status(404).json({ error: 'Itinerary not found' });
        }
        res.json(itinerary);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});




// ✅ API Endpoint to Get Hidden Spots
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
