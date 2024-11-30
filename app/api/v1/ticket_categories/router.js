const express = require('express');
const router = express();

router.get('/ticket_categories', (req, res) => {
    res.status(200).json({
        Message: "Get all ticket_categories",
    });
});

router.post('/ticket_categories', (req, res) => {
    
    const {name, organize, event, status} = req.body;

    res.status(201).json({
        Message: "Create ticket_categories",
        Data: {
            name: name,
            organize: organize,
            event: event,
            status: status,
        }
    });
});

router.get('/ticket_categories/:id', (req, res) => {
    res.status(200).json({
        Message: "Get ticket_categories by id",
    });
});

router.put('/ticket_categories/:id', (req, res) => {

    const {id} = req.params;
    const {name, organize, event, status} = req.body;

    res.status(200).json({
        Message: "Update ticket_categories",
        Data: {
            name: name,
            organize: organize,
            event: event,
            status: status,
        }
    });
});

router.delete('/ticket_categories/:id', (req, res) => {

    const {id} = req.params;

    res.status(200).json({
        Message: "Delete ticket_categories",
    });
});


module.exports = router;