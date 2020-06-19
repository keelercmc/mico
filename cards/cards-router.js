const router = require('express').Router();

const Cards = require('./cards-model.js');


router.get('/:id', (req, res) => {
    const {id} = req.params;

    Cards.findBy(id)
        .then(cards => {
            if (cards) {
                res.status(200).json(cards);
            } else {
                res.status(404).json({message: "Could not retrieve cards with give id"})
            }
        })
        .catch(error => {
            res.status(500).json({message: "Failed to get cards"})
        })
});

router.post('/', (req, res) => {
    const cardsInfo = req.body;

    Cards.add(cardsInfo)
        .then(cards => {
            res.status(201).json(cards);
        })
        .catch(error => {
            res.status(500).json({message: "Failed to add cards"})
        })
});

router.put('/:id', (req, res) => {
    const cardsUpdates = req.body;
    const {id} = req.params;

    Cards.findBy(id)
        .then(cards => {
            if(cards) {
                Cards.update(cardsUpdates, id)
                    .then(updatedCards => {
                        res.json(updatedCards);
                    });
            } else {
                res.status(404).json({message: "Could not find cards with given id"})
            }
        })
        .catch(error => {
            res.status(500).json({message: "Failed to update cards"})
        })
});

router.delete('/:id', (req,res) => {
    const {id} = req.params;

    Cards.remove(id)
        .then(deleted => {
            if (deleted) {
                res.json({message: "deleted cards"})
            } else {
                res.status(404).json({message: "Could not find cards with given id"})
            }
        })
        .catch(error => {
            res.status(500).json({message: "Failed to delete cards"})
        })
});

module.exports = router;
