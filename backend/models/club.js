const mongoose = require("mongoose");


const clubSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Technical", "Cultural", "Sports", "Management"],
    },
    date: {
      type: Date,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Club", clubSchema);