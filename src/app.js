// Third Party Library
const express = require('express')
const app = express()
const hbs = require('hbs')

// Systems Library
const path = require('path')
const weatherRouter = require('./routes/weather')
const handlebarRouter = require('./routes/handlebar')

// Defines path for Express config
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const paritalsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath) // If we are not using Default 'views' name for the hbs views
hbs.registerPartials(paritalsPath)

// Using by express
app.use(weatherRouter)
app.use(express.static(publicDir))
app.use(handlebarRouter)

// Setup PORT
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server is up and running on port', port)
})

