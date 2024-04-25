const formE =document.querySelector('form')
console.log(formE);
formE.addEventListener('submit',(e)=>{
e.preventDefault()
const inputHight = document.querySelector('#oneH')
const inputWeight = document.querySelector('#towH')
 let weight= inputHight.value
 let height = inputWeight.value
 if (weight,height) {
  
 
 const url = 'http://localhost:8000/bmicalculator'
 
 formE.addEventListener('submit',(event)=>{
   event.preventDefault()
   console.log(weight,height);
    fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
   weight,
   height
  })
})
.then(response => parseInt(response))
.then(data => console.log(data))
.catch(error => console.error(error));
})

 }
















})
  