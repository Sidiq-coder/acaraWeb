const express = require('express');
const router = express();

router.get('/orders', (req, res) => {
    res.status(200).json({
        Message: "Get all orders",
    });
});

router.get('/orders/:id', (req, res) => {
    res.status(200).json({
        Message: "Get orders by id",
    });
});


router.post('/signin', (req, res) => {
    
    const {name, organize, event, status} = req.body;

    res.status(201).json({
        Message: "Sign In",
        Data: {
            name: name,
            organize: organize,
            event: event,
            status: status,
        }
    });
});

router.post('/organizers', (req, res) => {
    
    const {name, organize, event, status} = req.body;

    res.status(201).json({
        Message: "Create Admin or  Organizer",
        Data: {
            name: name,
            organize: organize,
            event: event,
            status: status,
        }
    });
});



// Participants

router.get('/events', (req, res) => {
    res.status(200).json({
        Message: "Get all events for participants",
    });
});

router.get('/events/:id', (req, res) => {
    res.status(200).json({
        Message: "Get evnts by id for participants",
    });
});

router.post('/events/:id/checkout', (req, res) => {
    
    const {name, organize, event, status} = req.body;

    res.status(201).json({
        Message: "Checkout events",
        Data: {
            name: name,
            organize: organize,
            event: event,
            status: status,
        }
    });
});

router.get('/dashboard', (req, res) => {
    res.status(200).json({
        Message: "This is dashboard",
    });
});

router.get('/dashboard/:id', (req, res) => {
    res.status(200).json({
        Message: "this is dashboard detail",
    });
});

router.post('/participants/auth/signin', (req, res) => {
    
    const {name, organize, event, status} = req.body;

    res.status(201).json({
        Message: "Participans in",
        Data: {
            name: name,
            organize: organize,
            event: event,
            status: status,
        }
    });
});

router.post('/participants/auth/signout', (req, res) => {
    
    const {name, organize, event, status} = req.body;

    res.status(201).json({
        Message: "participans out",
        Data: {
            name: name,
            organize: organize,
            event: event,
            status: status,
        }
    });
});


module.exports = router;