const mongoose = require("mongoose");

const PostLikeSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    likeCount: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Likes", PostLikeSchema);