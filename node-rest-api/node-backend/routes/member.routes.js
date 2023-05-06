const express = require("express");
const app = express();

const memberRoute = express.Router();
let Member = require("../model/Member");

// Add Members
memberRoute.route("/add-member").post((req, res, next) => {
  Member.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get all Members
memberRoute.route("/").get((req, res) => {
  Member.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Member
memberRoute.route("/read-member/:id").get((req, res) => {
  Member.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Member
memberRoute.route("/update-member/:id").put((req, res, next) => {
  Member.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Member updated successfully!");
      }
    }
  );
});

// Delete Member
memberRoute.route("/delete-member/:id").delete((req, res, next) => {
  Member.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = memberRoute;
