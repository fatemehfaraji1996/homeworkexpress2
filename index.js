const formE =document.querySelector('form')
console.log(formE);
formE.addEventListener('submit',(e)=>{
e.preventDefault()
const inputname = document.querySelector('#name')
const inputlast = document.querySelector('#last')
const inputpas = document.querySelector('#pas')
 let name= inputname.value
 let lastname = inputlast.value
 let pas = inputpas.value

 fetch('http://localhost:8080/', {
    method: 'POST',
    headers: {
       
    },

  
})
   .then(response => response.text())
   .then(response => console.log(JSON.stringify(response)))
})