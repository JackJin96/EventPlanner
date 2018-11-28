const express = require('express');
const router = express.Router();
const eventService = require('../services/eventService');

// get EventBrite events
router.get('/events/EB', (req, res) => {
    eventService.getEventsEB(req)
                .then(data => res.send(data.events));
});

// get TicketMaster events
router.get('/events/TM', (req, res) => {
    eventService.getEventsTM(req)
                .then(data => res.send(data));
});

router.post('/users', (req, res) => {
    console.log(req.body);
    console.log('backend users post reached!');
});
module.exports = router;