const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: ture }
);

module.exports = mongoose.model("Post", CategorySchema);
