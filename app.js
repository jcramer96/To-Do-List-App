/* ============================================= */
/*                  FUNCTIONS                    */
/* ============================================= */

function moveCompletedTasksToBottom() {
    // Get all list items
    const ulEl = document.getElementById('ul-el');
    const listItems = ulEl.querySelectorAll('li');
    
    // Array to store completed tasks
    const completedTasks = [];
    
    // Loop through each list item
    listItems.forEach((listItem) => {
      // Check if the list item has the class 'completed'
      const checkBox = listItem.querySelector('.checkbox');
      if (checkBox.classList.contains('completed')) {
        // Detach the list item from its current position
        listItem.remove();
        // Add the list item to the completed tasks array
        completedTasks.push(listItem);
      }
    });
    
    // Append completed tasks to the end of the list
    completedTasks.forEach((completedTask) => {
      ulEl.appendChild(completedTask);
    });
  }

/* ============================================= */
/*              CREATE LIST ITEMS                */
/* ============================================= */
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const addBtn = document.getElementById("add-btn");
const svgElements = document.getElementsByClassName('svg');

addBtn.addEventListener('click', () => {
    const listItem = document.createElement('li'); // Create a new <li> element
    listItem.classList.add('list-item'); // Add the 'list-item' class to the new <li> element
    listItem.innerHTML = `
        <button class="li-btn checkbox">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512">
                <path d="M448 0h-384c-35.2 0-64 28.8-64 64v384c0 35.2 28.8 64 64 64h384c35.2 0 64-28.8 64-64v-384c0-35.2-28.8-64-64-64zM448 448h-384v-384h384v384z"></path>
            </svg>
        </button>
        <p class="li-text">${inputEl.value}</p>
        <button class="li-btn edit">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512">
                <path d="M432 0c44.182 0 80 35.817 80 80 0 18.010-5.955 34.629-16 48l-32 32-112-112 32-32c13.371-10.045 29.989-16 48-16zM32 368l-32 144 144-32 296-296-112-112-296 296zM357.789 181.789l-224 224-27.578-27.578 224-224 27.578 27.578z"></path>
            </svg>
        </button>
        <button class="li-btn trash">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512">
                <path d="M64 160v320c0 17.6 14.4 32 32 32h288c17.6 0 32-14.4 32-32v-320h-352zM160 448h-32v-224h32v224zM224 448h-32v-224h32v224zM288 448h-32v-224h32v224zM352 448h-32v-224h32v224z"></path>
                <path d="M424 64h-104v-40c0-13.2-10.8-24-24-24h-112c-13.2 0-24 10.8-24 24v40h-104c-13.2 0-24 10.8-24 24v40h416v-40c0-13.2-10.8-24-24-24zM288 64h-96v-31.599h96v31.599z"></path>
            </svg>
        </button>
    `;
    ulEl.appendChild(listItem); // Add the new <li> element to the <ul> element
    inputEl.value = "";

    /* ============================================= */
    /*             CHECK-OFF LIST ITEMS              */
    /* ============================================= */
    const checkBox = listItem.querySelector('.checkbox');
    checkBox.addEventListener('click', () => {
        checkBox.classList.toggle('completed');
        if (checkBox.classList.contains('completed')) {
            checkBox.innerHTML = `
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512">
                        <path d="M448 0h-384c-35.2 0-64 28.8-64 64v384c0 35.2 28.8 64 64 64h384c35.2 0 64-28.8 64-64v-384c0-35.2-28.8-64-64-64zM224 397.255l-118.627-118.628 45.255-45.254 73.372 73.372 153.373-153.373 45.254 45.255-198.627 198.628z"></path>
                    </svg>
            `
            listItem.style.opacity = '90%';
            listItem.style.color = 'rgb(144, 238, 144)';
            svgElements.style.fill = 'rgb(144, 238, 144)';
            moveCompletedTasksToBottom();
        } else {
            checkBox.innerHTML = `
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512">
                    <path d="M448 0h-384c-35.2 0-64 28.8-64 64v384c0 35.2 28.8 64 64 64h384c35.2 0 64-28.8 64-64v-384c0-35.2-28.8-64-64-64zM448 448h-384v-384h384v384z"></path>
                </svg>
            `
            listItem.style.opacity = '100%';
            listItem.style.color = 'white';
            svgElements.style.fill = 'white';
        }
    })

    /* ============================================= */
    /*               EDIT LIST ITEMS                 */
    /* ============================================= */
    const editBtn = listItem.querySelector('.edit');

    editBtn.addEventListener('click', () => {
    const taskText = listItem.querySelector('.li-text');

    const editText = prompt('Enter the updated task:');
        if (editText) {
            taskText.textContent = editText;
        }
    });

    /* ============================================= */
    /*              DELETE LIST ITEMS                */
    /* ============================================= */
    const deleteBtn = listItem.querySelector('.trash'); // Get the delete button of the new <li> element

    deleteBtn.addEventListener('click', () => {
        listItem.remove(); // Remove the clicked <li> element from the DOM
    });
});