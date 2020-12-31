const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('Hello  this is Rajneesh');
})


app.listen(4444,(req,res) =>{
    console.log('started on http://localhost:4444');
})