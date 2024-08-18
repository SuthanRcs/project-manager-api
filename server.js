const dotenv = require('dotenv')
dotenv.config()

// modules
const express = require('express')
const app = express()

// database
const db = require('./db.js')

// routes
const loginRoutes = require('./routes/login.js')
const registerRoutes = require('./routes/register.js')

// middlewears
app.use(express.urlencoded({extended: false}))
app.use(express.json())


// route handeling
app.use('/register', registerRoutes)
app.use('/login', loginRoutes)




db.sync({ force: false })
  .then(() => {
    app.listen(process.env.PORT, console.log('Server is running on port: ' + process.env.PORT));
});