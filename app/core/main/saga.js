import {call, put, all, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import {
    GET_TODOS_REQUEST,
    getTodosSuccess,
    getTodosFailure,
    CREATE_TODO_REQUEST,
    createTodoSuccess,
    createTodoFailure,
    COMPLETE_TODO_REQUEST,
    completeTodoSuccess,
    completeTodoFailure, getTodosRequest,
} from './actions'

const api = 'https://loopback-todo-api.now.sh/api'

function* getTodos() {
    try {
        const {data} = yield call(axios.get, `${api}/Todos`)
        yield put(getTodosSuccess(data))
    }
    catch (error) {
        yield put(getTodosFailure(error))
    }
}

function* addTodo(action) {
    try {
        console.log(action)
        const todo = action.payload
        const {data} = yield call(axios.post, `${api}/Todos?access_token=s3cr3t`, todo)
        yield put(createTodoSuccess(data))
    }
    catch (error) {
        yield put(createTodoFailure(error))
    }
}

function* completeTodo(action) {
    try {
        const todo = action.payload
        const id = action.payload.id
        const {data} = yield call(axios.patch, `${api}/Todos/${id}?access_token=s3cr3t`, todo)
        yield put(completeTodoSuccess(data))
        yield put(getTodosRequest())
    }
    catch (error) {
        yield put(completeTodoFailure(error))
    }
}


export default function* main() {
    yield all([
        takeLatest(GET_TODOS_REQUEST, getTodos),
        takeLatest(CREATE_TODO_REQUEST, addTodo),
        takeLatest(COMPLETE_TODO_REQUEST, completeTodo),
    ])
}