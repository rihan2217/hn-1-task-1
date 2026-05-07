require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const scrapeRoutes = require("./routes/scrapeRoutes");

const scrapeHackerNews = require(
  "./services/scraperService"
);

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running");
});

app.use("/api/scrape", scrapeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);

  try {
    await scrapeHackerNews();

    console.log(
      "Initial scraping completed"
    );
  } catch (error) {
    console.log(
      "Initial scraping failed"
    );
  }
});