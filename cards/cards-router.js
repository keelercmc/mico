const router = require("express").Router();

const cards = require("./cards-model.js");

cards.get("/", (req, res) => {
  cards.find()
    .then(cards => {
      res.status(200).json(cards);
    })
    .catch(err => res.send(err));
});

module.exports = router;
