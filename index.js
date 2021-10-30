const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require('mongoose')
//! Import Routes
const authRoute = require('./routes/auth')

dotenv.config()

//! Connect to db
mongoose.connect(
    process.env.DB_CONNECT, {

        useNewUrlParser: true,
    
        useCreateIndex: true,
    
        useFindAndModify: false,
    
        useUnifiedTopology: true
    
    }  ,
    () => console.log("connected to db!",process.env.DB_CONNECT))

//! Middleware
app.use(express.json())
//! Route Middleware
app.use('/api/user', authRoute)

app.listen(3000, () => console.log('Server is running'))