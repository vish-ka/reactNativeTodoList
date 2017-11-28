export const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST'
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS'
export const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE'
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

export const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST
    }
}

export const getTodosSuccess = (todos) => {
    console.log(todos)
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos,
    }
}

export const getTodosFailure = (error) => {
    return {
        type: GET_TODOS_FAILURE,
        payload: error,
        error: true
    }
}
export const addTodo = (item) => {
    return {
        type: ADD_TODO,
        payload: item,
    }
}
export const removeTodo = (index) => {
    return {
        type: REMOVE_TODO,
        payload: index,
    }
}
