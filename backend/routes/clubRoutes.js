const express = require("express");
const Club = require("../models/club");
const protect = require("./authMiddleware.js");

const router = express.Router();


// CREATE CLUB (Only logged-in user)
router.post("/", protect, async (req, res) => {
  try {
    const { name, description, category, date, location, imageUrl } = req.body;

    const club = await Club.create({
      name,
      description,
      category,
      date,
      location,
      imageUrl,
      createdBy: req.user.id,
      members: [req.user.id] // creator automatically member
    });

    res.json(club);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});


// GET ALL CLUBS
router.get("/", async (req, res) => {
  try {
    const clubs = await Club.find()
      .populate("createdBy", "name email")
      .populate("members", "name email");

    res.json(clubs);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});


// JOIN CLUB
router.post("/:id/join", protect, async (req, res) => {
  try {
    const club = await Club.findById(req.params.id);

    if (!club) {
      return res.status(404).json({ message: "Club not found" });
    }

    if (!club.members.includes(req.user.id)) {
      club.members.push(req.user.id);
      await club.save();
    }

    res.json({ message: "Joined club successfully ✅" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});


// UPDATE CLUB (Only creator)
router.put("/:id", protect, async (req, res) => {
  try {
    const club = await Club.findById(req.params.id);
    if (!club) {
      return res.status(404).json({ message: "Club not found" });
    }
    if (club.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }
    club.name = req.body.name || club.name;
    club.description = req.body.description || club.description;
    club.category = req.body.category || club.category;
    club.date = req.body.date || club.date;
    club.location = req.body.location || club.location;
    club.imageUrl = req.body.imageUrl || club.imageUrl;
    await club.save();
    res.json(club);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE CLUB (Only creator)
router.delete("/:id", protect, async (req, res) => {
  try {
    const club = await Club.findById(req.params.id);

    if (!club) {
      return res.status(404).json({ message: "Club not found" });
    }

    // ❌ No authorization check
    await club.deleteOne();

    res.json({ message: "Club deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;