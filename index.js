const formEle =document.querySelector('form')
formEle.addEventListener('submit',(e)=>{
e.preventDefault()
const inputNumbeer = document.querySelector('#one')
const inputNumberSecend = document.querySelector('#tow')
 let numberone= inputNumbeer.value
 let numbetTow = inputNumberSecend.value
 console.log(numberone,numbetTow);
if (numberone,numbetTow) {
 const url = 'http://localhost:8000/'
    fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
   numberone,
   numbetTow
  })
})
.then(response => response.text())
.then(data =>{
    console.log(data);
  const formE =document.querySelector('form')
  const pEle = document.createElement('p')
  formE.append(pEle)
  pEle.textContent = data
} )
.catch(error => console.error(error));
}
})


 