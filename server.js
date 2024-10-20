const express = require('express')
const app = express()
const db = require('./db')
const bodyparse = require('body-parser')
const personRoutes = require('./routes/personRoutes')
const menuRoutes = require('./routes/menuRoutes')
require("dotenv").config()

app.use(bodyparse.json())

//person routes
app.use("/person",personRoutes)

// menuItem routes
app.use("/menu",menuRoutes)

const PORT = process.env.PORT || 4000
// Listen server
app.listen(PORT,()=>{
    console.log("server is started port 1000");
})