const express = require('express');
const app = express();

const PORT = process.env.PORT || 4444;

app.get('/',(req,res) => {
    res.send('Hello  this is Rajneesh');
})


app.listen(PORT,(req,res) =>{
    console.log(`started on http://localhost:${PORT}`);
})