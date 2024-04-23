const { isUtf8 } = require('buffer');
const express = require('express');
const { contentType, charset } = require('mime-types');
const cors = require('cors')
const path = require('path');
const app = express();
const port = 8080;
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


app.get("/",  (req, res) => {
    res.sendFile(__dirname + "/index.html")
});
// 

 app.post('/',(req,res)=>{
    console.log(req.body);
    
 })
// 

app.listen(port);
console.log('Server started at http://localhost:' + port);