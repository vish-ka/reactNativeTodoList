import {createReducer} from '../createReducer'
import {
    GET_TODOS_REQUEST,
    GET_TODOS_SUCCESS,
    GET_TODOS_FAILURE,
    CREATE_TODO_REQUEST,
    CREATE_TODO_SUCCESS,
    CREATE_TODO_FAILURE,
    COMPLETE_TODO_REQUEST,
    COMPLETE_TODO_SUCCESS,
    COMPLETE_TODO_FAILURE
} from './actions'

const DEFAULT_STATE = {
    todos: ['Click to remove', 'Buy food', 'Write Code'],
    error: null,
    loading: false
}

const setLoading = (state) => {
    return {
        ...state,
        loading: true
    }
}

const setTodos = (state, action) => {
    return {
        ...state,
        todos: action.payload,
        loading: false
    }
}

const setError = (state, action) => {
    return {
        ...state,
        error: action.payload,
        loading: false
    }
}

const addTodo = (state, action) => {
    const {todos} = state
    return {
        ...state,
        todos: [...todos, action.payload],
    }
}
const completeTodo = (state, action) => {
    const {todos} = state
    return {
        ...state,
        todos: todos
    }
}

export default createReducer(DEFAULT_STATE, {

    [GET_TODOS_REQUEST]: setLoading,
    [GET_TODOS_SUCCESS]: setTodos,
    [GET_TODOS_FAILURE]: setError,
    [CREATE_TODO_REQUEST]: setLoading,
    [CREATE_TODO_SUCCESS]: addTodo,
    [CREATE_TODO_FAILURE]: setError,
    [COMPLETE_TODO_REQUEST]: setLoading,
    [COMPLETE_TODO_SUCCESS]: completeTodo,
    [COMPLETE_TODO_FAILURE]: setError
})


