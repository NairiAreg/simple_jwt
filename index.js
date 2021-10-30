const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const app = express()

//! Import routes
const authRoute = require('./routes/auth')

mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true
}, () => console.log("db connected"))


//! Middleware
app.use(express.json())
//! Route middleware
app.use('/api/user', authRoute)
app.listen(3000, () => console.log('Server working'))