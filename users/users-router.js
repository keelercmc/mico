const router = require('express').Router();

const Users = require('./users-model.js');

router.get('/:id/decks', (req, res) => {
    const { id } = req.params;
    Users.findDecks(id)
        .then(decks => {
            if (decks.length) {
                res.status(201).json(decks)
            } else {
                res.status(404).json({message: "Could not retrieve decks"})
            }
        })
        .catch(error => {
            res.status(500).json({message: "Failed to get decks"})
        })
})

router.post('/:id/decks', (req, res) => {
    const deckInfo = req.body;

    Users.addDeck(deckInfo)
        .then(deck => {
            res.status(201).json(deck);
        })
        .catch(error => {
            res.status(500).json({message: "Failed to add new story"})
        })
});

router.delete('/:id', (req,res) => {
    const {id} = req.params;

    Users.remove(id)
        .then(deleted => {
            if (deleted) {
                res.json({message: "deleted user"})
            } else {
                res.status(404).json({message: "Could not find user with given id"})
            }
        })
        .catch(error => {
            res.status(500).json({message: "Failed to delete user"})
        })
});


module.exports = router;
