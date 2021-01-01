const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencodded({extended: true}));


const {db,Tasks} = require('./db');

const PORT = process.env.PORT || 4444;

app.get('/', (req,res) => {
    res.send('Hellow this is rajnees');
})

app.get('/tasks',async(req,res) =>{
    res.send(await Tasks.findAll())
})

app.post('/tasks', async(req,res) =>{
res.send(await Tasks.create(req.body));

})
db.sync().then(()=>{
    app.listen(PORT,(req,res) =>{
        console.log(`started on http://localhost:${PORT}`);
    })

})



