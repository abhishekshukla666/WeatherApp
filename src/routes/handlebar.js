const express = require('express')
const forecast = require('./forecast')
const router = new express.Router()

// Routes
router.get('', (req, res) => {
    forecast('28.664999993486695', '77.43488861491157', (error, forecastData) => {
        if (error) {
            res.send({ error })
        } else {
            // res.send({ forecastData })
            console.log(forecastData)
            const timeZone = forecastData.timezone
            const weatherSummary = "Its " + forecastData.currently.summary + ' and feels like ' + forecastData.currently.temperature + ' degree celcius'
            res.render('index', {
                title: 'Weather App',
                name: 'Abhishek Shukla',
                timeZone: timeZone,
                summary: weatherSummary
            })
        }
    })
})

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Weather App',
        name: 'Abhishek Shukla'
    })
})

router.get('/help', (req, res) => {
    res.render('help', {
        description: 'I am here to help you',
        title: 'Help',
        name: 'Abhishek Shukla'
    })
})

router.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Abhishek shukla',
        errorMessage: 'Page not found'
    })
})

module.exports = router