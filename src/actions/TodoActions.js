import uuid from 'uuid/v4';

//Actions
export function addTodo(todo) {
  return {
    type: 'ADD_TODO',
    id: uuid(),
    text: todo,
  };
}

export function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    id: id,
  };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id: id,
  };
}

export function editTodo(id, todo) {
  return {
    type: 'EDIT_TODO',
    id: id,
    text: todo,
  };
}
