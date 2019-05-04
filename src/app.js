// Third Party Library
const express = require('express')
const app = express()
const hbs = require('hbs')

// Systems Library
const path = require('path')
const weatherRoute = require('./routes/weather')

// Defines path for Express config
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const paritalsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath) // If we are not using Default 'views' name for the hbs views
hbs.registerPartials(paritalsPath)

// Using by express
app.use(weatherRoute)
app.use(express.static(publicDir))

// Setup PORT
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server is up and running on port', port)
})

// Routes
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Abhishek Shukla'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Weather App',
        name: 'Abhishek Shukla'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        description: 'I am here to help you',
        title: 'Help',
        name: 'Abhishek Shukla'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Abhishek shukla',
        errorMessage: 'Page not found'
    })
})

