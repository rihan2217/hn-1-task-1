const axios = require("axios");
const cheerio = require("cheerio");

const Story = require("../models/Story");

const scrapeHackerNews = async () => {
  try {
    const { data } = await axios.get(
      "https://news.ycombinator.com/"
    );

    const $ = cheerio.load(data);

    const stories = [];

    $(".athing").each((index, element) => {
      if (index >= 10) return false;

      const title = $(element)
        .find(".titleline a")
        .text()
        .trim();

      const url = $(element)
        .find(".titleline a")
        .attr("href");

      const subtext = $(element).next();

      const pointsText = subtext
        .find(".score")
        .text();

      const points = parseInt(pointsText) || 0;

      const author =
        subtext.find(".hnuser").text() || "Unknown";

      const postedAt =
        subtext.find(".age").text() || "";

      stories.push({
        title,
        url,
        points,
        author,
        postedAt,
      });
    });

    for (const story of stories) {
      await Story.updateOne(
        {
          title: story.title,
          author: story.author,
        },
        {
          $set: story,
        },
        {
          upsert: true,
        }
      );
    }

    return stories;
  } catch (error) {
    console.error(
      "Scraper Error:",
      error.message
    );

    throw error;
  }
};

module.exports = scrapeHackerNews;