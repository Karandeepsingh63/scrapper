const express=require('express');
const connectDB=require('./config/db');
const cors=require('cors');
require('dotenv').config();
const app=express();
const User = require("./models/User");
const Story = require("./models/Story");

const authRoutes = require("./routes/authRoutes");
const scrapeRoutes = require("./routes/scrapeRoutes");
const scrapeStories = require("./services/scraperService");

// Connect to MongoDB
const startServer = async () => {
  try {
    await connectDB();

    // Run scraper automatically
    await scrapeStories();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.log(error.message);
  }
};

startServer();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("API is running...");
}   )

app.use("/api/auth", authRoutes);
app.use("/api/scrape", scrapeRoutes);

const PORT=process.env.PORT || 5000;                