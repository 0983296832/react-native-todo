export const addTodo = (todo) => {
    return {
        type: "ADD_TODO",
        payload: todo
    }
}
export const doneTodo = (id) => {
    return {
        type: "DONE_TODO",
        payload: id
    }
}
export const removeTodo = (id) => {
    return {
        type: "REMOVE_TODO",
        payload: id
    }
}
