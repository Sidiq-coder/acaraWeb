const express = require('express');
const router = express();

router.get('/payments', (req, res) => {
    res.status(200).json({
        Message: "Get all payments",
    });
});

router.post('/payments', (req, res) => {
    
    const {name, organize, event, status} = req.body;

    res.status(201).json({
        Message: "Create payments",
        Data: {
            name: name,
            organize: organize,
            event: event,
            status: status,
        }
    });
});

router.get('/payments/:id', (req, res) => {
    res.status(200).json({
        Message: "Get payments by id",
    });
});

router.put('/payments/:id', (req, res) => {

    const {id} = req.params;
    const {name, organize, event, status} = req.body;

    res.status(200).json({
        Message: "Update payments",
        Data: {
            name: name,
            organize: organize,
            event: event,
            status: status,
        }
    });
});

router.delete('/payments/:id', (req, res) => {

    const {id} = req.params;

    res.status(200).json({
        Message: "Delete payments",
    });
});


module.exports = router;