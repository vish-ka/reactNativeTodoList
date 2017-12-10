import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default class List extends Component {

    renderItem = (item, i) => {
        const {onPressItem} = this.props

        return (
            <TouchableOpacity
                style={styles.item}
                onPress={() => {
                    item.completed = !item.completed;
                    onPressItem(item)
                }}
                key={i}
            >
                <Text style={item.completed && styles.completed}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        const {list} = this.props

        return (
            <View>
                {list.slice(0).reverse().map(this.renderItem)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'whitesmoke',
        marginBottom: 5,
        padding: 15,
    },
    completed: {
        textDecorationLine: 'line-through',
        textDecorationColor: '#000'
    }
})
