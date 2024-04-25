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
 console.log(name,lastname,pas);
if (name,lastname,pas) {
    

let url = 'http://localhost:8000/'
    fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
 name,lastname,pas
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

}
)

