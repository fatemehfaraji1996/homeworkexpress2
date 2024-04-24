const formE =document.querySelector('form')
console.log(formE);
formE.addEventListener('submit',(e)=>{
e.preventDefault()
const inputHight = document.querySelector('#oneH')
const inputWeight = document.querySelector('#towH')
 let weight= inputHight.value
 let height = inputWeight.value

 const url = 'http://localhost:8080/bmicalculator'

 async function sendData() {
    // Associate the FormData object with the form element
    const formData = new FormData(formE);
  
    try {
      const response = await fetch(url, {
        method: "POST",
        // Set the FormData instance as the request body
        body: weight,height
      });
      console.log(await response.json());
    } catch (e) {
      console.error(e);
    }
  }
  
  // Take over form submission
  formE.addEventListener("submit", (event) => {
    event.preventDefault();
    sendData();
  });


})
  