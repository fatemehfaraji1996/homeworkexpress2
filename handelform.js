const formEle = document.querySelector('.form')
console.log(formEle);
const inputEle = document.querySelector('.form-control')
console.log(inputEle);
formEle.addEventListener('submit',(event)=>{
    event.preventDefault()
    let inputEle = document.querySelector('.form-control')
    console.log(inputEle.value);
    let titel = inputEle.value
    console.log(titel);
    fetch('http://localhost:4000/home', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    titel
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
})
