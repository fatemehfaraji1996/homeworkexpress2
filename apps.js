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
//1 

 app.post('/',(req,res)=>{
    const { num1, num2 } = req.body;
    const sum = parseInt(num1) + parseInt(num2);
    res.send(`The sum of ${num1} and ${num2} is: ${sum}`);
 })
// 2
app.get('/bmi-calculator', (req, res) => {
    res.sendFile(__dirname + '/bmi.html');
});
// 3
app.post('/bmicalculator', (req, res) => {
    const { weight, height } = req.body;
    const bmi = weight / (height * height);

    res.send(` BMI is: ${bmi}`);
});
app.listen(port);
console.log('Server started at http://localhost:' + port);
