import React from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ModalComponent({
  modal,
  modalHandler,
  edit,
  editModalHandler,
  editHandler,
}) {
  return (
    <Modal transparent visible={modal} animationType="slide">
      <View style={styles.modalContent}>
        <Icon
          name="close"
          size={25}
          color="slateblue"
          style={styles.icon}
          onPress={() => modalHandler()}
        />
        <Text style={styles.editTodo}>Edit Todo</Text>
        <TextInput
          style={styles.editInput}
          value={edit}
          onChangeText={text => editModalHandler(text)}
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
  );
}

const styles = StyleSheet.create({
  icon: {alignSelf: 'center', margin: 10},
  modalContent: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('screen').width * 1,
    paddingBottom: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(224, 218, 254, 0.95)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    fontSize: 16,
    color: '#333',
  },
  button: {
    alignSelf: 'center',
    paddingTop: 20,
    width: 300,
    height: 80,
  },
});
