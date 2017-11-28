import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import List from '../components/list'
import Input from '../components/input'
import Title from '../components/title'

import {getTodosRequest} from '../core/main/actions'
import { addTodo, removeTodo } from '../core/main/actions'

const mapStateToProps = (state) => {
    return {
        todos: state.main.todos,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTodos: () => dispatch(getTodosRequest()),
        addTodo: (text) => dispatch(addTodo(text)),
        removeTodo: (index) => dispatch(removeTodo(index)),
    }
}

class Main extends Component {

    componentDidMount() {
        this.props.getTodos()
    }

    onAddTodo = (text) => {
        const item = {
            title:text,
            completed:false
        }
        this.props.addTodo(item)
    }

    onRemoveTodo = (index) => {
        this.props.removeTodo(index)
    }

    render() {
        const {todos} = this.props

        return (
            <View>
                <Title>
                    To-Do List
                </Title>
                <Input
                    placeholder={'Type a todo, then hit enter!'}
                    onSubmitEditing={this.onAddTodo}
                />
                <List
                    list={todos}
                    onPressItem={this.onRemoveTodo}
                />
            </View>
        )
    }
}

Main.propTypes = {
    todos: PropTypes.array,
    getTodos: PropTypes.func,
    addTodo: PropTypes.func,
    removeTodo: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
