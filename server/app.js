const dotenv = require("dotenv")
const express = require('express')
const app = express()
const mongoose = require('mongoose')

dotenv.config({path:'./config.env'})
require('./db/connection')

const PORT = process.env.PORT || 4000
app.use(express.json())
app.use(require('./router/route'))

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`)
})

if(process.env.NODE_ENV == "production" ){
    app.use(express.static("out"));
}