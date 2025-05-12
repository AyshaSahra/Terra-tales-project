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
    lat: Number,
    lng: Number,
});
const Card = mongoose.model('Card', cardSchema, 'cards');

// ✅ Define Itinerary Card Schema
const itineraryCardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    location: { type: String, required: true },
    text: { type: String, required: true },
    src: { type: String, required: true },
    days: [{ type: String, required: true }],
});
const ItineraryCard = mongoose.model('ItineraryCard', itineraryCardSchema, 'itinerary-cards');

// ✅ Define Hidden Spot Schema
const hiddenSpotSchema = new mongoose.Schema({
    title: String,
    src: String,
    location: String,
    text: String,
    lat: Number,
    lng: Number,
});
const HiddenSpot = mongoose.model('HiddenSpot', hiddenSpotSchema, 'hidden-spots');

// ✅ Define Subscriber Schema (New for Newsletter)
const subscriberSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true }
});
const Subscriber = mongoose.model('Subscriber', subscriberSchema, 'subscribers');

// ✅ API Endpoint for Newsletter Subscription
app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    try {
        const exists = await Subscriber.findOne({ email });
        if (exists) {
            return res.status(400).json({ message: "Email already subscribed!" });
        }

        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();
        console.log("✅ New subscriber added:", email);
        res.json({ message: "Subscription successful!" });
    } catch (error) {
        console.error("❌ Error saving subscriber:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// ✅ API Endpoint to Get All Subscribers (Optional for Debugging)
app.get('/api/subscribers', async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.json(subscribers);
    } catch (error) {
        console.error("Error fetching subscribers:", error);
        res.status(500).json({ message: "Error fetching subscribers" });
    }
});

// ✅ Existing API Endpoints (No Changes Below This Line)
app.get('/api/cards', async (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (error) {
        res.status(500).json({ message: "Error fetching cards" });
    }
});

app.get('/api/itinerary-cards', async (req, res) => {
    try {
        const itineraryCards = await ItineraryCard.find();
        res.json(itineraryCards);
    } catch (error) {
        res.status(500).json({ message: "Error fetching itinerary cards" });
    }
});

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
        const card = await Card.findById(cardId);

        if (!card) {
            return res.status(404).json({ message: "Destination not found" });
        }

        res.json(card);
    } catch (error) {
        console.error("Error fetching destination:", error);
        res.status(500).json({ message: "Server error" });
    }
});

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
