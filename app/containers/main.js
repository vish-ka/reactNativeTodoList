import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import List from '../components/list'
import Input from '../components/input'
import Title from '../components/title'

import { getTodosRequest, createTodoRequest, completeTodoRequest} from '../core/main/actions'

const mapStateToProps = (state) => {
    return {
        todos: state.main.todos,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTodos: () => dispatch(getTodosRequest()),
        addTodo: (text) => dispatch(createTodoRequest(text)),
        removeTodo: (index) => dispatch(completeTodoRequest(index)),
    }
}

class Main extends Component {

    componentDidMount() {
        this.props.getTodos()
    }

    onAddTodo = (text) => {
        const item = {
            title:text,
            completed:false,
            authorId: '5a2c034f9738b600b5670a5b'
        }
        this.props.addTodo(item)
    }

    onRemoveTodo = (item) => {
        this.props.removeTodo(item)
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
