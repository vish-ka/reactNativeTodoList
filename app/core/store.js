import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import {AsyncStorage} from 'react-native'
import {
    compose,
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux'
import {
    persistStore,
    autoRehydrate
} from 'redux-persist'

import mainSaga from './saga'
import mainReducer from './main/reducer'
import navReducer from './router/reducer'

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
    main: mainReducer,
    nav: navReducer,
})

const store = createStore(
    reducer,
    undefined,
    compose(
        applyMiddleware(logger, sagaMiddleware),
        autoRehydrate()
    )
)

sagaMiddleware.run(mainSaga)

persistStore(store, {storage: AsyncStorage})

export default store