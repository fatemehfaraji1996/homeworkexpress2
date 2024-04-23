const formE =document.querySelector('form')
console.log(formE);
formE.addEventListener('submit',(e)=>{
e.preventDefault()
const inputHight = document.querySelector('#oneH')
const inputWeight = document.querySelector('#towH')
 let numberone= inputHight.value
 let numbetTow = inputWeight.value

 fetch('https:/bmicalculator', {
    method: 'POST',
    headers: {
        numberone,
        numbetTow 
    },
    body: JSON.stringify({ "id": 78912 })
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))

 
})