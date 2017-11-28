import {call, put, all, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import {
    GET_TODOS_REQUEST,
    getTodosSuccess,
    getTodosFailure,
} from './actions'

const api = 'https://jsonplaceholder.typicode.com'

function* getTodos() {
    try {
        const {data} = yield call(axios.get, `${api}/todos`)
        yield put(getTodosSuccess(data))
    }
    catch (error) {
        yield put(getTodosFailure(error))
    }
}


export default function* main() {
    yield all([
        takeLatest(GET_TODOS_REQUEST, getTodos),
    ])
}