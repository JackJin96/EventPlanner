const express = require('express');
const router = express.Router();
const eventService = require('../services/eventService');

// get EventBrite events
router.get('/events/EB', (req, res) => {
    eventService.getEventsEB(req)
                .then(data => {
                    // Object.keys(events.events).forEach(key => console.log(events.events[key].logo.url));
                    res.send(data.events)
                });
});

// get TicketMaster events
router.get('/events/TM', (req, res) => {
    eventService.getEventsTM(req)
                .then(data =>
                {
                    Object.keys(data).forEach(key =>
                        {
                            Object.keys(data[key].images).forEach(imgkey => {
                                image = data[key].images[imgkey]
                                if(image.ratio === '16_9' && image.width === 640) {
                                    console.log(image.url);
                                }
                            });
                        });
                    res.send(data)
                });
});

module.exports = router;