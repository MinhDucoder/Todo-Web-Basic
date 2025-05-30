export const handleEvent = () => {
    const todoInput = document.querySelector('.todo-input')
    const todoButton = document.querySelector('.todo-button')
    const todoList = document.querySelector('.todo-list')
    const filterOption = document.querySelector('.filter-todo')

    getLocalTodos(todoList)
    todoButton.addEventListener('click', (e) => addTodo(e, todoInput, todoList))
    todoList.addEventListener('click', (e) => deleteCheck(e, todoList))
    filterOption.addEventListener('change', (e) => filterTodo(e, todoList))
}

const addTodo = (e, todoInput, todoList) => {
    e.preventDefault()
    if (!todoInput.value.trim()) return

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)

    saveLocalTodos(todoInput.value)

    const completeButton = document.createElement('button')
    completeButton.innerHTML = '<i class="fas fa-check-circle"></i>'
    completeButton.classList.add('complete-btn')
    todoDiv.appendChild(completeButton)

    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv)
    todoInput.value = ''
}

const deleteCheck = (e, todoList) => {
    const item = e.target
    if (item.classList.contains('trash-btn')) {
        const todo = item.parentElement
        todo.classList.add('slide')
        removeLocalTodos(todo)
        todo.addEventListener('transitionend', () => todo.remove())
    }

    if (item.classList.contains('complete-btn')) {
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }
}

const filterTodo = (e, todoList) => {
    const todos = todoList.children
    for (let todo of todos) {
        switch (e.target.value) {
            case 'all':
                todo.style.display = 'flex'
                break
            case 'completed':
                todo.style.display = todo.classList.contains('completed') ? 'flex' : 'none'
                break
            case 'incomplete':
                todo.style.display = !todo.classList.contains('completed') ? 'flex' : 'none'
                break
        }
    }
}

function saveLocalTodos(todo) {
    let todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
}

function getLocalTodos(todoList) {
    let todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo => {
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')

        const newTodo = document.createElement('li')
        newTodo.innerText = todo
        newTodo.classList.add('todo-item')
        todoDiv.appendChild(newTodo)

        const completeButton = document.createElement('button')
        completeButton.innerHTML = '<i class="fas fa-check-circle"></i>'
        completeButton.classList.add('complete-btn')
        todoDiv.appendChild(completeButton)

        const trashButton = document.createElement('button')
        trashButton.innerHTML = '<i class="fas fa-trash"></i>'
        trashButton.classList.add('trash-btn')
        todoDiv.appendChild(trashButton)

        todoList.appendChild(todoDiv)
    })
}

function removeLocalTodos(todoElement) {
    let todos = JSON.parse(localStorage.getItem('todos')) || []
    const todoText = todoElement.querySelector('li').innerText
    todos = todos.filter(t => t !== todoText)
    localStorage.setItem('todos', JSON.stringify(todos))
}
