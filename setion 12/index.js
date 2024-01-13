const express = require('express')
const app = express();
const port = 5000

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/quick-eatdb');

const dishes = require('./routes/foodRoutes')

app.use('/food', dishes)

app.get("/",(req,res)=>{

    res.json({home:"home"})

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})