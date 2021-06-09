import React, { useState } from 'react';
import { SafeAreaView, Text, 
    StyleSheet, View, KeyboardAvoidingView, TextInput, TouchableOpacity, 
    TouchableWithoutFeedback, Keyboard, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import DoneTodoCard from "../components/DoneTodoCard";
import { addTodo } from "../actions/TodoActions";

export default function DoneTodo({ navigation }) {

    const todoItems = useSelector(state => state);
    const dispatch = useDispatch();

    const [todo, setTodo] = useState();

    const addTodoHandler = () => {
        Keyboard.dismiss();
        dispatch(addTodo(todo))
        // setTodoItems([...todoItems, todo]);
        setTodo(null);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style = { styles.container}>
            <View style = {styles.todoContents}>
                    {todoItems.map(({completed, id, text}, index) => {
                        if (completed) {
                            return <DoneTodoCard key = {index} id = {id} todo = {text}/> 
                        }
                    })}
            </View>

        </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#E5E7EA',
    },
    todoContents: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 10,
        height: (Dimensions.get('screen').height)*0.65,
    },
})