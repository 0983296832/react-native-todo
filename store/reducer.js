const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload]
        case "REMOVE_TODO":
            return state.filter(todo => todo.id !== action.payload)
        case "DONE_TODO":
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed }
                } else return todo
            })
        default:
            return state
    }
}

export default todoReducer

