const express = require('express');
const router = express.Router();
//const tripTbl = require('../data/helpers/tripTblModel')
//const tripTbl = require('../data/dbConfig');
const db = require('../data/db');
const sendUserError = (status, msg, res) => {
    res
        .status(status)
        .json({ Error: msg });
};

/************************************ TRIPS SECTION ***********************************/

router.get('/', (req, res) => {
    db.find()
        .then((trips) => {
            res.json(trips);
        })
        .catch(err => {
            res
                .status(500)
                .json({ error: "The trip information could not be retrieved." });
        });
});

/********* Get Trips *************/
/* router.get('/', (req, res) => {
    tripTbl.get()
        .then((trip) => {
            res.json(trip);
        })
        .catch(err => {
            res
                .status(500)
                .json({ error: "The trip information could not be retrieved." });
        });
}); */

/********* Get Single Trip *************/
router.get('/:id', (req, res) => {
    const { id } = req.params
    tripTbl.get(id)
        .then(trip => {
            if (trip) {
                res.json(trip);
            } else {
                res
                    .status(404)
                    .json({ message: "The trip with the specified ID does not exist." })
            }
        })
        .catch(err => {
            res
                .status(500)
                .json({ error: "The trip information could not be retrieved." });
        });
});


/************* Delete Trip *************/
router.delete('/:id', (req, res) => {
    const { id } = req.params

    if (id) {
        tripTbl.remove(id)
            .then(trip => {
                if (trip) {
                    res.json({ message: "The trip was successfully deleted" });
                } else {
                    res
                        .status(404)
                        .json({ message: "The trip with the specified ID does not exist." })
                }
            })
            .catch(err => {
                res
                    .status(500)
                    .json({ error: "The trip could not be removed." });
            });
    }
});

/********* Update Trip *************/
router.put('/:id', (req, res) => {
    const { id } = req.params
    const newTrip = req.body

    if (!newTrip.name) {
        res
            .status(400)
            .json({ message: "Please enter a name for the trip." });
    } else {
       
        if (newTrip) {
            tripTbl.update(id, newTrip)
                .then(trip => {
                   
                        
                        if (trip) {
                            res
                                .status(201)
                                .json(trip);
                        } else {
                            res
                                .status(404)
                                .json({ message: "The trip with the specified ID does not exist." })
                        }
                 
                   
                })
                .catch(err => {
                    res
                        .status(500)
                        .json({ error: "The trip could not be modified." });
                });
        } else {

            res
                .status(404)
                .json({ message: "The trip with the specified ID does not exist." })
        }
    }
})

/********* Create New Trip *************/
router.post('/', (req, res) => {
    const trip = req.body;
    if (trip.Trip) {
        tripTbl.insert(trip)
            .then(trip => {
                res.status(201)
                    .json(trip)
            })
            .catch(err => {
                res
                    .status(500)
                    .json({ message: "failed to insert trip in db" })
            });
    } else {
        res
            .status(400)
            .json({ message: "missing name." })
    }
});

/************* Get Single Trips's Catches *************/
router.get('/catchTbl/:id', (req, res) => {
    const { id } = req.params;
    tripTbl
        .getTripCatches(id)
        .then(usersCatches => {
            if (usersCatches === 0) {
                return sendUserError(404, 'No catches in the trip', res);
            }
            res.json(usersCatches);
        })
        .catch(err => {
            return sendUserError(500, 'Unable to access db', res);
        });
});



module.exports = router;