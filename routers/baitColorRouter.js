const express = require('express');
const router = express.Router();
const db = require('../data/baitColorDb');
const sendUserError = (status, msg, res) => {
    res
        .status(status)
        .json({ Error: msg });
};

/************************************ LOCATION SECTION ***********************************/

router.get('/', (req, res) => {
    db.find()
        .then((baitColor) => {
            res.json(baitColor);
        })
        .catch(err => {
            res
                .status(500)
                .json({ error: "The place information could not be retrieved." });
        });
});

module.exports = router;