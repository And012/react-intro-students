const express = require('express')

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:4000',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
const app = express()
app.use(cors(corsOptions));
app.get('/', (request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.status(500).json({message: 'error'})
})
app.listen('http://localhost:4000/')
