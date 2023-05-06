const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Member = new Schema(
  {
    name: {
      type: String,
    },
    email2: {
      type: String,
    },
    contact: {
      type: String,
    },
    country: {
      type: String,
    },
    date: {
      type: Date,
    },
  },
  {
    collection: "members",
  }
);

module.exports = mongoose.model("Member", Member);
