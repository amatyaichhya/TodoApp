
let todoID = 0

//Actions
export function addTodo(todo) {
    return {
        type: 'ADD_TODO',
        id: todoID++,
        text: todo
    }
}

export function deleteTodo(id) {
    return {
        type: 'DELETE_TODO',
        id: id
    }
}

export function toggleTodo(id) {
    return {
        type: 'TOGGLE_TODO',
        id: id
    }
}

export function editTodo(id, todo) {
    return {
        type: 'EDIT_TODO',
        id: id,
        text: todo
    }
}