import {createReducer} from '../createReducer'
import {
    GET_TODOS_REQUEST,
    GET_TODOS_SUCCESS,
    GET_TODOS_FAILURE,
    ADD_TODO,
    REMOVE_TODO
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
    console.log(action)
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
        todos: [action.payload, ...todos],
    }
}
const removeTodo = (state, action) => {
    const {todos} = state
    return {
        ...state,
        todos: todos.filter((todo, i) => i !== action.payload),
    }
}

export default createReducer(DEFAULT_STATE, {

    [GET_TODOS_REQUEST]: setLoading,
    [GET_TODOS_SUCCESS]: setTodos,
    [GET_TODOS_FAILURE]: setError,
    [ADD_TODO]: addTodo,
    [REMOVE_TODO]: removeTodo
})


