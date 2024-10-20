const express = require('express')
const app = express()
const db = require('./db')
const bodyparse = require('body-parser')
const personRoutes = require('./routes/personRoutes')
const menuRoutes = require('./routes/menuRoutes')

app.use(bodyparse.json())

app.use("/person",personRoutes)
app.use("/menu",menuRoutes)

// Listen server
app.listen(1000,()=>{
    console.log("server is started port 1000");
})