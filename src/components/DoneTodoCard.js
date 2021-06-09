import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch } from 'react-redux';
import { deleteTodo} from "../actions/TodoActions";

export default function DoneTodoCard({id, todo}) {

    const dispatch = useDispatch();

    return (
        <View style = {styles.TodoItem}>
            <View style = {styles.left}>
                <Text style = {styles.itemText}>{todo}</Text>
            </View>  

            <Icon name='trash' color= 'slateblue' size={20} onPress={() => dispatch(deleteTodo(id))}/>
        
        </View>
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
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
        flexWrap: 'wrap'
    },
    itemText: {
        maxWidth: '80%',
    }
})