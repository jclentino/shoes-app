const express = require('express')
const productsRoutes = require('./src/routes/productsRoutes')

const app = express()
app.use(express.json())

app.use(productsRoutes)

app.listen(3000, ()=> {
    console.log('listen port 3000')
})