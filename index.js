const h1 = document.querySelector('h1')
console.log(h1);
const divCantaner = document.querySelector('.cantaner')
console.log(divCantaner);
async function fetchTodos() {
    try {
      const response = await fetch("http://localhost:4000/home");
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const todos = await response.json();
      console.log(todos);
    } catch (error) {
      console.error("There was a problem with your fetch request: ", error);
    }
  }
  
  fetchTodos();