const mongoose = require("mongoose");

const storySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    url: {
      type: String,
      default: "",
    },

    points: {
      type: Number,
      default: 0,
    },

    author: {
      type: String,
      default: "Unknown",
    },

    postedAt: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

storySchema.index(
  {
    title: 1,
    author: 1,
  },
  {
    unique: true,
  }
);

module.exports = mongoose.model("Story", storySchema);