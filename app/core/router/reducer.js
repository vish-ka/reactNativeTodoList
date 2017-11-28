import {createNavReducer} from '../createReducer'
import {AppNavigator} from './router'
import {
    HOME
} from './actions'

const {
    getStateForAction,
    getActionForPathAndParams,
} = AppNavigator.router


const homeAction = getActionForPathAndParams(HOME)
const homeNavState = getStateForAction(homeAction)
const INITIAL_NAV_STATE = getStateForAction({
    homeNavState
})

export default createNavReducer(INITIAL_NAV_STATE, {

})