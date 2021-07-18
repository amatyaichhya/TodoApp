import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from 'react-native';
import {useSelector} from 'react-redux';
import DoneTodoCard from '../components/DoneTodoCard';

export default function DoneTodo() {
  const todoItems = useSelector(state => state);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.todoContents}>
          {todoItems.map(({completed, id, text}, index) => {
            if (completed) {
              return <DoneTodoCard key={index} id={id} todo={text} />;
            }
          })}
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //backgroundColor: '#E5E7EA',
  },
  todoContents: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10,
    height: Dimensions.get('screen').height * 0.65,
  },
});
