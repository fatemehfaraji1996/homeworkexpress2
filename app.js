
const express = require('express')
const app = express()
const path =require('path')
const {urlincoded}= require('./middleware/md')
const {json}=require('./middleware/md')
const corse = require('cors')
const fs = require('fs')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(corse())
app.get('/compose',(req,res)=>{
    res.sendFile(path.join(__dirname, '/compose.html'));


})

app.get('/home', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(JSON.parse(data));
    });
});

// app.post('/home',(req,res)=>{
//     // res.sendFile(path.join(__dirname, '/index.html'));
//     // console.log( req.body);
// //  seve data 
//     const jsonData = JSON . stringify (req.body) 
//     const filePath = 'data.json'
//     try {
//         fs.writeFileSync(filePath, jsonData);
//         console.log('JSON data saved to file successfully.');
//       } catch (error) {
//         console.error('Error writing JSON data to file:', error);
//       }
//       res.send(req.body)
// })
const PORT = 5000
app.post('/home', (req, res) => {
    const newData = req.body;
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) throw err;
        let jsonData = JSON.parse(data);
        jsonData.push(newData);
        fs.writeFile('data.json', JSON.stringify(jsonData), 'utf8', (err) => {
            if (err) throw err;
            res.send('Data added successfully');
        });
    });
});
app.listen(PORT,()=>{
    console.log('runing your port');

})



    
