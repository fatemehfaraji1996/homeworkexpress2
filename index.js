// here you have a products array. by implementing express app write crud functions related to this array.
//- get functions
//- post
//- put
//- delete
let products = [
    { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
    { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
    { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
    { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
    { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
  ];

const { urlencoded } = require('body-parser');
const exoress = require('express')
const app = exoress()
app.use(exoress.json())
// app.use(urlencoded())
const port = 4000
// 
app.get('/product',(req,res)=>{
  res.send(res.json())
})
// get
app.post('/product',(req,res)=>{
  let {id,name,price} = req.body
  const newData = req.body
  req.body+= newData
  res.json(newData)
})
// post
app.put('product/:id',(req,res)=>{
  const productId = parseInt(req.params.id) 
  const updateProdact = req.body
  products=products.map(product=>product.id ===productId ?updateProdact:product)
  res.json(updateProdact)

})
// put
app.delete('product/;id',(req,res)=>{
  const deleteId = parseInt(req.params.id) 
  products = products.filter(product => product.id !== deleteId)
res.sendStatus(204)
})



app.listen(port,()=>{
  console.log('your port is runing on ',port);
})
  