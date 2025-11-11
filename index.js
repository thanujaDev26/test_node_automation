const express = require('express')
const app = express()

require('dotenv').config()

const port = process.env.PORT

app.get('/', async(req,res)=>{
    res.status(200).json({
        message : "GET is running on the Dev Server"
    })
})

app.get('/get', async()=>{
    return "GET Request from QA Branch";
})

app.get('/qa-test', async(req,res)=>{
    res.status(200).json({
        message : "QA Endpoint"
    })
})

app.listen(port, '0.0.0.0', ()=>{
    console.log(`App is running on ${port}`)
})