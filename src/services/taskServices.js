const todos = [
    {
        _id: 10,
        task: 'Buy books',
        completed: false,
    },
    {
        _id: 11,
        task: 'Study Javascript',
        completed: true,
    },
    {
        _id: 12,
        task: 'Build CI/CD',
        completed: false,
    },
    {
        _id: 13,
        task: 'Launch Start-Up',
        completed: true,
    },
    {
        _id: 14,
        task: 'Make a Billion!',
        completed: true,
    }
];

export function getTasks() {
    return todos;
}

export function addTask(task) {
    const newTask = task;
    newTask._id = todos[todos.length - 1]._id + 1;
    return  newTask;
}

export function updateTask(id) {
    const index = todos.findIndex((task) => task._id === id);    
    todos[index] = { ...todos[index] };
    todos[index].completed = !todos[index].completed;
    return todos; 
}

export function deleteTask(id) {
    const filteredTodos = todos.filter((todo) => todo._id !== id);
    return filteredTodos;
}
