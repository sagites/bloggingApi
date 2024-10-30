const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const {
  addToBookmark,
  getAllBookmarks,
} = require("../controllers/bookmarkController");

router.route("/:id").put(protect, addToBookmark);
router.route("/").get(getAllBookmarks);


module.exports = router;