const config = {
    app: {
        port: 8000,
        postman_token: '64de2995-6bb8-4c1e-b732-b630baaa97cb',
        EB: {
            apiurl: 'https://www.eventbriteapi.com/v3/events/search/',
            token: '3YT75UUCQUZWHOKXFDMZ'
        },
        TM: {
            apiurl: 'https://app.ticketmaster.com/discovery/v2/events',
            apikey: 'yvE2GqWdA8xBuDVumRZQedlmIL1z6mWi'
        }
    },
    db: {
        mlabUrl : 'mongodb://user:411user@ds249583.mlab.com:49583/event_planner'
    }
}

module.exports = config;