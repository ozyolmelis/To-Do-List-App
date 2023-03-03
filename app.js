var todoList = [];
let input = document.querySelector('input');
var list = document.querySelector("ul");
let button = document.querySelector(".btn");

function addItem() 
{
    const newLi = document.createElement('li');
    const newItem = input.value;
    newLi.innerText = newItem;
    document.querySelector("#to-do").appendChild(newLi);
    todoList.push(newItem);
    console.log(todoList);
    input.value = '';
}
  
  button.addEventListener('click', function(event) 
  {
    event.preventDefault();
    addItem();
  });
  
  input.addEventListener('keydown', function(event) 
  {
    if (event.key === 'Enter') 
    { 
      event.preventDefault();
      addItem();
    }
  });

newLi.class = 'newLi';






