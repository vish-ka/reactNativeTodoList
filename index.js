import React from 'react'
import { AppRegistry, View } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import { reducer } from './app/redux/todoListRedux'

const store = createStore(reducer, applyMiddleware(thunk))

import App from './app/App'

const AppWithStore = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent('reactNativeTodoList', () => AppWithStore);
