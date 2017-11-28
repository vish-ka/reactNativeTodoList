import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'
import AppWithNavigationState from './core/router/router'
import store from './core/store'
import { Provider } from 'react-redux'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        )
    }
}

export default App
