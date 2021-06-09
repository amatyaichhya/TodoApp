const initialState = []

export default function RootReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,{
                    id: action.id,
                    text: action.text,
                    completed: false,
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                ?{...todo,completed:
                    !todo.completed}:
                todo)
        case 'DELETE_TODO':
            return [...state, state.filter((item) => item.id !== action.id)]

        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ?{...todo,text:
                        action.text}:
                    todo)
        default:
            return state
    }
}