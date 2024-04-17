
const express = require('express')
const app = express()
const path =require('path')
app.get('/compose',(req,res)=>{
    res.sendFile(path.join(__dirname, '/compose.html'));
})

const PORT = 4000
app.listen(PORT,()=>{
    console.log('runing yor purt');

})

// const form = document.querySelector('.form')
// console.log(form);
// form.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     const inputEle = document.querySelector('.form-control')

    
// })