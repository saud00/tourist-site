const dotenv = require("dotenv")
const express = require('express')
const app = express()
const mongoose = require('mongoose')

dotenv.config({path:'./config.env'})
require('./db/connection')

const PORT = process.env.PORT || 4000
app.use(express.json())
app.use(require('./router/route'))

// // Accessing the path module
// const path = require("path");

// // Step 1:
// app.use(express.static(path.resolve(__dirname, "./mernfront/out")));
// // Step 2:
// app.get("*", function (request, response) {
//   response.sendFile(path.resolve(__dirname, "./mernfront/out", "index.html"));
// });

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`)
})

if(process.env.NODE_ENV == "production" ){
    app.use(express.static("mernfront/out"));
}