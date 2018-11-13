const express = require('express');
const router = express.Router();
const eventService = require('../services/eventService');

// get EventBrite events
router.get('/events/EB', (req, res) => {
    console.log('router EB');
    eventService.getEventsEB(req)
                .then(events => res.send(events));
});

// get TicketMaster events
router.get('/events/TM', (req, res) => {
    eventService.getEventsTM(req)
                .then(events => res.send(events));
});

module.exports = router;