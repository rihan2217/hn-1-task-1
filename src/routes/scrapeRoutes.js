const express = require("express");

const router = express.Router();

const scrapeHackerNews = require(
  "../services/scraperService"
);

router.post("/", async (req, res) => {
  try {
    const stories = await scrapeHackerNews();

    res.status(200).json({
      success: true,
      count: stories.length,
      data: stories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;