const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();

const path = require("path");

const authRoutes = require("./routes/authRoutes");
const scrapeRoutes = require("./routes/scrapeRoutes");
const storyRoutes = require("./routes/storyRoutes");

const scrapeStories = require("./services/scraperService");

const PORT = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/scrape", scrapeRoutes);
app.use("/api/stories", storyRoutes);


app.get("/api", (req, res) => {
  res.send("API is running...");
});


app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});


const startServer = async () => {
  try {
    await connectDB();

    await scrapeStories();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.log(error.message);
  }
};

startServer();