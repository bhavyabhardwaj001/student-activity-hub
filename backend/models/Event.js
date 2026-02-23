const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Technical", "Cultural", "Sports","Management"],
    },
    date: {
      type: Date,
      required: true,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
