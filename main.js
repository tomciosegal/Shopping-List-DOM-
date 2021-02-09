
//removing items
const deleteButtons = document.querySelectorAll('#grocery-list li .delete')
const list = document.querySelectorAll('li')

for(let button of deleteButtons){
    button.addEventListener('click', (e) => {
        e.target.parentNode.remove(list)
    })
}

//adding items to the list
// const buttonAdd = document.querySelector('#add-item button')
// const inputAdd = document.querySelector('#add-item input')

    const formAdd = document.getElementById('add-item').addEventListener('submit', (e) => {
    //prevent page from reloading
    
    e.preventDefault();

    const inputAdd = document.querySelector('#add-item input');
    const ulList = document.querySelector('#grocery-list ul')
   
    const newListItem = document.createElement('li');
    const groceryName = document.createElement('span');
    const deleteButton = document.createElement('span');
   
    newListItem.appendChild(groceryName);
    newListItem.appendChild(deleteButton);
    ulList.appendChild(newListItem);
    groceryName.textContent = inputAdd.value
    deleteButton.textContent = 'delete'
    deleteButton.classList.add('delete')
    groceryName.classList.add('name')
})



































// const deleteButtons = document.querySelectorAll('#grocery-list li .delete')
// const groceryList = document.getElementById('grocery-list li')
// for(let button of deleteButtons){
//     button.addEventListener('click', (e) => {
//         const li = e.target.parentElement
//         li.parentElement.removeChild(li)
//     })
// }

