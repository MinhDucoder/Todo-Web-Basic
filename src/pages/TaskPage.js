import Header from "./HeaderPage";

const Task = () => {
    return `
        ${Header()}
        <form action="">
            <input type="text" class="todo-input" />
            <button class="todo-button" type="submit">
                <i class="fas fa-plus-circle fa-lg"></i>
            </button>
            <div class="select">
                <select name="todos" class="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </div>
        </form>
        <div class="todo-container">
            <ul class="todo-list"></ul>
        </div>
    `;
};

export default Task;
