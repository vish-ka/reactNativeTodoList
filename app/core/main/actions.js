export const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST'
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS'
export const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE'
export const CREATE_TODO_REQUEST = 'CREATE_TODO_REQUEST'
export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS'
export const CREATE_TODO_FAILURE = 'CREATE_TODO_FAILURE'
export const COMPLETE_TODO_REQUEST = 'COMPLETE_TODO_REQUEST'
export const COMPLETE_TODO_SUCCESS = 'COMPLETE_TODO_SUCCESS'
export const COMPLETE_TODO_FAILURE = 'COMPLETE_TODO_FAILURE'

export const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST
    }
}

export const getTodosSuccess = (todos) => {
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
export const createTodoRequest = (item) => {
    return {
        type: CREATE_TODO_REQUEST,
        payload: item
    }
}

export const createTodoSuccess = (item) => {
    return {
        type: CREATE_TODO_SUCCESS,
        payload: item,
    }
}

export const createTodoFailure = (error) => {
    return {
        type: CREATE_TODO_FAILURE,
        payload: error,
        error: true
    }
}
export const completeTodoRequest = (index) => {
    return {
        type: COMPLETE_TODO_REQUEST,
        payload: index
    }
}

export const completeTodoSuccess = (item) => {
    return {
        type: COMPLETE_TODO_SUCCESS,
        payload: item,
    }
}

export const completeTodoFailure = (error) => {
    return {
        type: COMPLETE_TODO_FAILURE,
        payload: error,
        error: true
    }
}
