const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Petition = new Schema(
  {
    fname: {
      type: String,
    },
    lname: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  {
    collection: "petitions",
  }
);

module.exports = mongoose.model("Petition", Petition);
