const express = require('express');
const router = express.Router();
const catchTbl = require('../data/helpers/catchTblModel');

const sendUserError = (status, msg, res) => {
    res
        .status(status)
        .json({ Error: msg });
};

/***************************************** CATCH SECTION **************************************/


/********* Get Catches *************/
router.get('/', (req, res) => {
    catchTbl.get()
        .then((catches) => {
            res.json(catches);
        })
        .catch(err => {
            res
                .status(500)
                .json({ error: "The catch information could not be retrieved." });
        });
});

/********* Get Single Catch *************/
router.get('/:id', (req, res) => {
    const { id } = req.params
    catchTbl.get(id)
        .then(catches => {
            if (catches) {
                res.json(catches);
            } else {
                res
                    .status(404)
                    .json({ message: "The catch with the specified ID dont exist." })
            }
        })
        .catch(err => {
            res
                .status(500)
                .json({ error: "The catch could not be retrieved." });
        });
});


/************* Delete Catch *************/
router.delete('/:id', (req, res) => {
    const { id } = req.params
   
    if (id) {
        catchTbl.remove(id)
            .then(catches => {
                if (catches) {
                    res.json({ message: "The catch was successfully deleted" });
                } else {
                    res
                        .status(404)
                        .json({ message: "The catch with the specified ID does not exist." })
                }
            })
            .catch(err => {
                res
                    .status(500)
                    .json({ error: "The catch could not be removed." });
            });
    }
});

/********* Update Catch *************/
router.put('/:id', (req, res) => {
    const { id } = req.params
    const newCatch = req.body

    if (!newCatch.tripTbl_id) {
        res
            .status(400)
            .json({ message: "Please provide project id, description, notes and completion status for the action." });
    } else {
        
        if (newCatch) {
            catchTbl.update(id, newCatch)
                .then(catches => {
                    if (catches) {
                       
                     
                            res
                                .status(201)
                                .json(catches);
                        } else {
                            res
                                .status(404)
                                .json({ message: "The catch with the specified ID does not exist." })
                        }
                  
                })
                .catch(err => {
                    res
                        .status(500)
                        .json({ error: "The catch could not be modified." });
                });
        } else {

            res
                .status(404)
                .json({ message: "The catch with the specified ID does not exist." })
        }
    }
})

/********* Create New Catch *************/
router.post('/', (req, res) => {
    const catches = req.body;
    console.log("action:", action)
    if (catches.tripTbl_id) {
        catchTbl.insert(catchs)
            .then(catchs => {
                res.status(201)
                    .json(catchs)
            })
            .catch(err => {
                res
                    .status(500)
                    .json({ message: "failed to insert action in db" })
            });
    } else {
        res
            .status(400)
            .json({ message: "missing project_id, description, notes or completion status." })
    }
});




module.exports = router;