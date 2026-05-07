# Hacker News Scraper API

A Node.js backend application that scrapes the top 10 stories from Hacker News, stores them in MongoDB, and exposes an API endpoint to trigger scraping manually.

---

# Features

- Scrape top 10 Hacker News stories
- Extract:
  - Title
  - URL
  - Points
  - Author
  - Posted Time
- Save stories into MongoDB
- Prevent duplicate entries
- Auto scrape on server startup
- Manual scrape using API endpoint

---

# Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Axios
- Cheerio

---

# Project Structure

```bash
hn-scraper/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── models/
│   │   └── Story.js
│   │
│   ├── routes/
│   │   └── scrapeRoutes.js
│   │
│   ├── services/
│   │   └── scraperService.js
│   │
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

# Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPO_URL
```

Move into the project folder:

```bash
cd hn-scraper
```

Install dependencies:

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/hn-scraper
```

---

# Running the Project

Start development server:

```bash
npm run dev
```

Server runs on:

```bash
http://localhost:5000
```

---

# API Endpoint

## Trigger Scraper

### POST

```bash
/api/scrape
```

### Full URL

```bash
http://localhost:5000/api/scrape
```

---

# Testing with Postman

Method:

```bash
POST
```

URL:

```bash
http://localhost:5000/api/scrape
```

---

# Sample Response

```json
{
  "success": true,
  "count": 10,
  "data": [
    {
      "title": "Example Story",
      "url": "https://example.com",
      "points": 120,
      "author": "john",
      "postedAt": "2 hours ago"
    }
  ]
}
```

---

# MongoDB Storage

Scraped stories are automatically saved in MongoDB.

Database:

```bash
hn-scraper
```

Collection:

```bash
stories
```

---

# Auto Scraping

The scraper automatically runs when the server starts.

---

# Duplicate Prevention

Duplicate stories are prevented using MongoDB `upsert` with a unique index.

---

# Scripts

Run development server:

```bash
npm run dev
```

Run production server:

```bash
npm start
```

---

# Dependencies

```json
{
  "axios": "^1.6.0",
  "cheerio": "^1.0.0",
  "cors": "^2.8.5",
  "dotenv": "^16.4.0",
  "express": "^4.18.2",
  "mongoose": "^8.0.0"
}
```

---

# Author

Submitted as part of MERN Stack Assignment Task 1.