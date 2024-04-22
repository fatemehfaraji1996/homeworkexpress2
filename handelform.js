const formEle = document.querySelector('.form')
// console.log(formEle);
const inputEle = document.querySelector('.form-control')
// console.log(inputEle);
formEle.addEventListener('submit',(event)=>{
    event.preventDefault()
    let inputEle = document.querySelector('.form-control')
    let inputPost = document.querySelector('.post')
    let titel = inputEle.value
    let post = inputPost.value
    fetch('http://localhost:4000/home', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    titel,
    post

  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
})
