const h1 = document.querySelector('h1')
console.log(h1);
const divCantaner = document.querySelector('.cantaner')
console.log(divCantaner);
async function fetchTodos() {
    try {
      const response = await fetch("http://localhost:5000/home");
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const todos = await response.json();
      console.log(todos);
      console.log(todos);
      for (let i = 0; i < todos.length; i++) {
        const element = todos[i];
        const divcantaners = document.createElement('div')
      divCantaner.append(divcantaners)
      const h1Ele = document.createElement('h1')
      divcantaners.append(h1Ele)
      h1Ele.textContent=element.titel
      h1Ele.classList.add("h1style")
      const pEle =document.createElement('p')
      divcantaners.append(pEle)
      pEle.textContent=element.post
      pEle.classList.add('pstyle')
      }
      
    } catch (error) {
      console.error("There was a problem with your fetch request: ", error);
    }
  }
  
  fetchTodos();




