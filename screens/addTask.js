import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput, Text } from 'react-native';
import DrawerIcon from '../components/drawerIcon';
import { connect } from 'react-redux';
import { addTask } from './../actions/task';
import taskList from '../reducers/taskList';

const addTaskScreen = ({ navigation, addTask }) => {
  const [value, setValue] = useState('Add a new task');

  // open drawer icon in the header
  React.useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <DrawerIcon onPress={() => navigation.openDrawer()} />,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <Button
        style={styles.button}
        title="Add"
        onPress={() => addTask(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 20,
  },
  textInput: {
    height: 40,
    borderWidth: 2,
    borderColor: 'blue',
    marginVertical: 20,
    padding: 5,
  },
});

const mapStateToProps = (state) => {
  return {
    taskList: state.taskList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(addTaskScreen);
