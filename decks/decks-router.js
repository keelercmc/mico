const router = require("express").Router();
const Decks = require('./decks-model.js');

router.get('/:id/cards', (req, res) => {
    const {id} = req.params;

    Stories.findCards(id)
        .then(cards=> {
            if(cards.length) {
                res.status(201).json(cards)
            } else {
                res.status(404).json({message: "Could not retrieve cards"})
            }
        })
        .catch(error => {
            res.status(500).json({message: "Failed to get cards"})
        })
})

router.get('/:id', (req, res) => {
    const {id} = req.params;

    Stories.findBy(id)
        .then(deck => {
            if (deck) {
                res.status(200).json(deck);
            } else {
                res.status(404).json({message: "Could not retrieve deck with given id"})
            }
        })
        .catch(error => {
            res.status(500).json({message: "Failed to get deck"})
        })
});

router.post('/:id/cards', (req, res) => {
    const cardInfo = req.body;
    const { id } = req.params;
    cardInfo.deck_id = id;

    Stories.addCard(cardInfo)
        .then(card => {
            res.status(201).json(card);
        })
        .catch(error => {
            res.status(500).json({message: "Failed to add card"});
        })
});

router.put('/:id', (req, res) => {
    const deckUpdates = req.body;
    const {id} = req.params;

    Stories.findBy(id)
        .then(deck => {
            if(deck) {
                Stories.update(deckUpdates, id)
                    .then(updatedDeck => {
                        res.json(updatedDeck);
                    });
            } else {
                res.status(404).json({message: "Could not find deck with given id"})
            }
        })
        .catch(error => {
            res.status(500).json({message: "Failed to update deck"})
        })
});

router.delete('/:id', (req,res) => {
    const {id} = req.params;

    Stories.remove(id)
        .then(deleted => {
            if (deleted) {
                res.json({message: "deleted deck"})
            } else {
                res.status(404).json({message: "Could not find deck with given id"})
            }
        })
        .catch(error => {
            res.status(500).json({message: "Failed to delete deck"})
        })
});


module.exports = router;
