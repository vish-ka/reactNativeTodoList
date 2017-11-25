import React from 'react'
import { AppRegistry, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { reducer } from './app/redux/todoListRedux'
const store = createStore(reducer)

import App from './app/App'

const AppWithStore = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent('reactNativeTodoList', () => AppWithStore);
