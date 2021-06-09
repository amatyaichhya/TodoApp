import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from "../actions/TodoActions";

export default function TodoCard({id, todo}) {

    const dispatch = useDispatch();

    return (
        <TouchableOpacity
        onLongPress={() => console.log('pressed')}>
        <View style = {styles.TodoItem}>
            <View style = {styles.left}>
                <TouchableOpacity style={styles.checkbox} onPress = {() => dispatch(toggleTodo(id))}></TouchableOpacity>
                <Text style = {styles.itemText}>{todo}</Text>
            </View> 
            
            <View style = {styles.right}>
                <Icon name='edit' color= 'slateblue' size={20} style = {{marginRight: 8, paddingTop: 5}}/>
                <Icon name='trash' color= 'slateblue' size={20} onPress={() => dispatch(deleteTodo(id))}/>
            </View>
        
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    TodoItem: {
        width: (Dimensions.get('screen').width)*0.9,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        shadowColor: '#5f5f5f',
        shadowOpacity: 1,
        shadowOffset: {
            height: 1,
            width: 1,
          },
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    checkbox: {
        width: 24,
        height: 24,
        marginRight: 15,
        backgroundColor: 'slateblue',
        opacity: 0.2,
    },
    itemText: {
        maxWidth: '80%',

    },
    right: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})