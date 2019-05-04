const express = require('express')
const forecast = require('./forecast')

const router = new express.Router()

router.get('/weather', (req, res) => {
     forecast('28.664999993486695', '77.43488861491157', (error, forecastData) => {
        if (error) {
            res.send({ error })
        } else {
            res.send({ forecastData })
        }
    })
})

module.exports = router