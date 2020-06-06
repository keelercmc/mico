const router = require("express").Router();

const decks = require("./decks-model.js");

router.get("/", (req, res) => {
  decks.find()
    .then(decks => {
      res.status(200).json(decks);
    })
    .catch(err => res.send(err));
});

module.exports = router;
