const formE =document.querySelector('form')
console.log(formE);
formE.addEventListener('submit',(e)=>{
e.preventDefault()
const inputname = document.querySelector('#name')
const inputWlast = document.querySelector('#last')
 let numberone= inputname.value
 let numbetTow = inputWlast.value

 fetch('http://localhost:8080/bmicalculator', {
    method: 'POST',
    headers: {
        numberone,
        numbetTow 
    },
    body:inputname,inputlast
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))
})