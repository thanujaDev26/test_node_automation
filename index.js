const express = require('express')
const app = express()

require('dotenv').config()

const port = process.env.PORT

app.get('/', async(req,res)=>{
    res.status(200).json({
        message : "GET is running on the server"
    })
})

app.listen(port, '0.0.0.0', ()=>{
    console.log(`App is running on ${port}`)
})