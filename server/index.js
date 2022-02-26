const express = require('express')
const path = require('path')

const app = express()
app.use(express.static(path.join(__dirname, '../client/out')));

// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname, '.client/ut/'));
//   });
app.get('/f', (req,res) => {
    res.sendFile(path.join(__dirname, '../client/out/404.html'));
  });

app.get('/hello', (req,res)=>{
    res.send({"Hello":"HI"})
})

app.listen(3001,()=> console.log("listening 3001"))