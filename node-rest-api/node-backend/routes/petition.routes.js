const express = require("express");
const app = express();

const petitionRoute = express.Router();
let Petition = require("../model/Petition");

// Add Book
petitionRoute.route("/add-petition").post((req, res, next) => {
  Petition.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get all Book
petitionRoute.route("/").get((req, res) => {
  Petition.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Book
petitionRoute.route("/read-petition/:id").get((req, res) => {
  Petition.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Book
petitionRoute.route("/update-petition/:id").put((req, res, next) => {
  Petition.findByIdAndUpdate(
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
        console.log("Petition updated successfully!");
      }
    }
  );
});

// Delete Book
petitionRoute.route("/delete-petition/:id").delete((req, res, next) => {
  Petition.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = petitionRoute;
