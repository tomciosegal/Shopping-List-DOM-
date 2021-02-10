
    //removing items
const deleteButtons = document.querySelectorAll('#grocery-list li .delete')
const list = document.querySelectorAll('li')

for(let button of deleteButtons){
    button.addEventListener('click', (e) => {
        e.target.parentNode.remove(list)
    })
}

    //adding items to the list

    const formAdd = document.getElementById('add-item').addEventListener('submit', (e) => {
    //prevent page from reloading
    
    e.preventDefault();

    const inputAdd = document.querySelector('#add-item input');
    const ulList = document.querySelector('#grocery-list ul')
   
    const newListItem = document.createElement('li');
    const groceryName = document.createElement('span');
    const deleteButton = document.createElement('span');

   // appending new elements 

    newListItem.appendChild(groceryName);
    newListItem.appendChild(deleteButton);
    ulList.appendChild(newListItem);
    groceryName.textContent = inputAdd.value
    deleteButton.textContent = 'delete'
    deleteButton.classList.add('delete')
    groceryName.classList.add('name')
})

    //hide items

    const hideInput = document.getElementById('hide').addEventListener('click', () => {
        const ulList = document.querySelector('#grocery-list ul')
        if(ulList.classList != 'hide'){
            ulList.classList.add('hide')
        }
        else{
            ulList.classList.remove('hide')
        }
    });

        //search item
        const searchInput =  document.forms['search-item'].querySelector('input')
        searchInput.addEventListener('keyup', (e) => {
        //lets grab users text 
        let text = e.target.value.toLowerCase();
        const ulList = document.querySelector('#grocery-list ul')
        const list = document.querySelectorAll('li')
        //converting list to array to loop the li
        const listArray = Array.from(list)
        listArray.forEach((grocery) => {
            let groceryName = grocery.firstElementChild.textContent

            groceryNameLower = groceryName.toLocaleLowerCase();
            if(groceryNameLower.indexOf(text) != -1){
                grocery.style.display = 'block';
            }
            else{
                grocery.style.display = 'none'
            }

            });
        });
    

    
































// const deleteButtons = document.querySelectorAll('#grocery-list li .delete')
// const groceryList = document.getElementById('grocery-list li')
// for(let button of deleteButtons){
//     button.addEventListener('click', (e) => {
//         const li = e.target.parentElement
//         li.parentElement.removeChild(li)
//     })
// }

