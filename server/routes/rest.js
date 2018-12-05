const express = require('express');
const router = express.Router();
const eventService = require('../services/eventService');
const userService = require('../services/userService');

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

// get events in user's interest list
router.get('/user/events', (req, res) => {
    userService.getInterestedEvents(req)
               .then(data => res.json(data));
});

// add a user upon log in
router.post('/users', (req, res) => {
    userService.addUser(req.body)
               .then(data => res.json(data))
               .catch(err => res.json(err));
});

// add an event to user's interest list
router.post('/events', (req, res) => {
    userService.addInterestedEvent(req.body)
                .then(data => res.json(data));
});

// delete an event from user's interest list
router.delete('/events', (req, res) => {
    userService.deleteInterestedEvent(req.body)
               .then(data => res.json(data));
});

module.exports = router;