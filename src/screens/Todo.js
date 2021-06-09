import React, { useState } from 'react';
import { SafeAreaView, Text, 
    StyleSheet, View, KeyboardAvoidingView, TextInput, TouchableOpacity, 
    TouchableWithoutFeedback, Keyboard, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import TodoCard from "../components/TodoCard";
import { addTodo } from "../actions/TodoActions";

export default function Todo({ navigation }) {

    const todoItems = useSelector(state => state);
    const dispatch = useDispatch();

    console.log(todoItems);

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
                        if (!completed) {
                            return <TodoCard key = {index} id = {id} todo = {text} /> 
                        }
                    })}
            </View>

            <KeyboardAvoidingView style = {styles.inputWrapper}>
                <TextInput 
                    style= {styles.input} 
                    placeholder='Add Todo'
                    value = {todo}
                    onChangeText = {text => setTodo(text)}
                ></TextInput>

                <TouchableOpacity onPress = {() => addTodoHandler()}>
                    <View  style = {styles.addWrapper}>
                        <Icon name='plus' color= 'slateblue' size={20}/>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>

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
    inputWrapper: {
        position: 'absolute',
        bottom: 15,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 13
    },
    input: {
        paddingVertical: 15,
        width: 300,
        paddingHorizontal: 25,
        backgroundColor: 'white',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 0.3,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 50,
        borderColor: '#C0C0C0',
        borderWidth: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
})