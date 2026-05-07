const scrapeStories = require("../services/scraperService");

const scrapeNews = async (req, res) => {
  try {
    await scrapeStories();

    res.status(200).json({
      message: "Stories scraped successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  scrapeNews,
};