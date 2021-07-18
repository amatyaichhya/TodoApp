import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  Modal,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import TodoCard from '../components/TodoCard';
import {addTodo, editTodo} from '../actions/TodoActions';

export default function Todo() {
  const todoItems = useSelector(state => state);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState();
  const [edit, setEditTodo] = useState();
  const [editId, setEditId] = useState();
  const [modal, setModal] = useState(false);

  const addTodoHandler = () => {
    Keyboard.dismiss();
    dispatch(addTodo(todo));
    setTodo(null);
  };

  const editTodoHandler = (id, todo) => {
    setModal(true);
    setEditId(id);
    setEditTodo(todo);
  };

  const editHandler = () => {
    setModal(false);
    dispatch(editTodo(editId, edit));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <Modal visible={modal} animationType="slide">
          <View style={styles.modalContent}>
            <Icon
              name="close"
              size={20}
              color="slateblue"
              style={{alignSelf: 'center', margin: 10}}
              onPress={() => setModal(false)}
            />
            <Text style={styles.editTodo}>Edit Todo</Text>
            <TextInput
              style={styles.editInput}
              value={edit}
              onChangeText={text => setEditTodo(text)}
            />
            <View style={styles.button}>
              <Button
                onPress={() => editHandler()}
                title="Update"
                color="slateblue"
              />
            </View>
          </View>
        </Modal>

        <View style={styles.todoContents}>
          {todoItems.map(({completed, id, text}, index) => {
            if (!completed) {
              return (
                <TodoCard
                  key={index}
                  id={id}
                  todo={text}
                  editTodoHandler={editTodoHandler}
                />
              );
            }
          })}
        </View>

        <KeyboardAvoidingView style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Add Todo"
            value={todo}
            onChangeText={text => setTodo(text)}
          />

          <TouchableOpacity onPress={() => addTodoHandler()}>
            <View style={styles.addWrapper}>
              <Icon name="plus" color="slateblue" size={20} />
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: '#E5E7EA',
  },
  modalContent: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E5E7EA',
  },
  editTodo: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    paddingBottom: 20,
  },
  editInput: {
    paddingVertical: 15,
    width: 300,
    paddingHorizontal: 25,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#C0C0C0',
    borderWidth: 0.3,
    color: '#333',
  },
  button: {
    alignSelf: 'flex-end',
    marginRight: 50,
    paddingTop: 20,
  },
  todoContents: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10,
    height: Dimensions.get('screen').height * 0.65,
  },
  inputWrapper: {
    position: 'absolute',
    bottom: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 13,
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
});
