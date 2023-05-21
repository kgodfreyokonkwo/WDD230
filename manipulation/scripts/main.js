//To create 3 variables that hold references to the input, 
//button and list element

const input = document.querySelector('input');
const button = document.querySelector('button');
const listElement = document.querySelector('ul');

//To Create an click event listener for the Add Chapter 
//button using addEventListener and an anonymous function.  

button.addEventListener('click', () => {
    const component = input.value;

    //To create an li element    
    const li = document.createElement('li');

    //To create a delete button
    const span = document.createElement('span');
    const deleteButton = document.createElement('button');
    
    li.appendChild(span);
    span.textContent = component;
    li.appendChild(deleteButton);

    //To populate the button textContent with an ❌
    deleteButton.textContent = "❌";

    //To append the li element with the delete button
    listElement.appendChild(li);
    
    //add an event listener to the delete button that removes the li element when clicked
    deleteButton.addEventListener('click', () => {
        listElement.removeChild(li);
    });
    //send the focus to the input element
    input.focus();

    //change the input value to nothing or 
    //the empty string to clean up the interface for the user
    input.value = '';
});

