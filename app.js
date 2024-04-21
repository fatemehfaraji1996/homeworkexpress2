
const express = require('express')
const app = express()
const path =require('path')
const {urlincoded}= require('./middleware/md')
const {json}=require('./middleware/md')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.get('/compose',(req,res)=>{
    res.sendFile(path.join(__dirname, '/compose.html'));
})

app.post('/home',(req,res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
    console.log( req.body);
    // res.send(req.body)
})


const PORT = 4000
app.listen(PORT,()=>{
    console.log('runing your port');

})



    
