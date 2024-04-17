
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

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
})


const PORT = 4000
app.listen(PORT,()=>{
    console.log('runing yor port');

})

// const form = document.querySelector('.form')
// console.log(form);
// form.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     const inputEle = document.querySelector('.form-control')

    
// })