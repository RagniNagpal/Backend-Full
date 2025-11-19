const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    draft: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
