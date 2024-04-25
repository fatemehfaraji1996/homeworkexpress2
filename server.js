const { isUtf8 } = require('buffer');
const express = require('express');
const { contentType, charset } = require('mime-types');
const cors = require('cors')
const path = require('path');
const app = express();
const port = 8000;
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.get("/",  (req, res) => {
    res.sendFile(__dirname + "/index.html")
});
app.post("/",(req,res)=>{
    const {name,last,pas}=req.body
    console.log(name,last,pas);
    console.log(req.body);
    if (pas==='123456789') {      
        res.send('your pass is carect')
    }else{
        res.send('your pass is false')
    }
})
app.listen(port,()=>{
    console.log("ok");
})