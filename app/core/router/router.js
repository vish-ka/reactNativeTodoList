import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {
    StackNavigator,
    addNavigationHelpers
} from 'react-navigation'
import { HOME } from './actions'

import Main from '../../containers/main'

export const AppNavigator = StackNavigator({
    [HOME]: {
        screen: Main,
        navigationOptions: {
            headerTitle: 'To Do list'
        }
    },
}, {
    initialRouteName: HOME
})

class AppWithNavigationState extends Component {
    render() {
        const {nav, dispatch} = this.props

        return (
            <AppNavigator
                navigation={addNavigationHelpers({
          dispatch,
          state: nav
        })}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav
})

AppWithNavigationState.propTypes = {
    nav: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(AppWithNavigationState)