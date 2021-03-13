import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Button,
  TextInput,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import DrawerIcon from '../components/drawerIcon';
import { connect } from 'react-redux';
import { addTask, deleteTask } from './../actions/task';
import taskList from '../reducers/taskList';
import { Card } from 'react-native-shadow-cards';
import axios from 'axios';
import { add } from 'react-native-reanimated';

const addTaskScreen = ({ navigation, taskList, addTask, deleteTask }) => {
  const [value, setValue] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const populateSampleData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      res.data.forEach((user) => {
        addTask(user.name);
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <DrawerIcon onPress={() => navigation.openDrawer()} />,
    });
  }, [navigation]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        deleteTask(item);
      }}
    >
      <Card style={styles.card}>
        <Text>{item.name}</Text>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size='large' color='blue' />
      ) : (
        <View style={styles.container}>
          <View style={styles.listContainer}>
            <FlatList
              data={taskList}
              renderItem={renderItem}
              keyExtractor={(item) => item.key}
            />
          </View>

          <View style={styles.addTaskContainer}>
            <TextInput
              style={styles.textInput}
              value={value}
              onChangeText={(text) => setValue(text)}
              placeholder="Add a task"
            />
            <View style={styles.button}>
              <Button
                title="Add"
                onPress={() => {
                  addTask(value);
                  setValue('');
                }}
              />
            </View>
            <View style={styles.button}>
              <Button title="Add Sample Data" onPress={populateSampleData} />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 2,
  },
  card: {
    padding: 5,
    margin: 5,
    backgroundColor: '#add8e6',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 20,
  },
  listContainer: {
    flex: 3,
  },
  addTaskContainer: {
    flex: 1,
  },
  textInput: {
    height: 40,
    borderWidth: 2,
    borderColor: 'blue',
    marginVertical: 10,
    padding: 5,
    paddingHorizontal: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    taskList: state.taskReducer.taskList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
    deleteTask: (task) => dispatch(deleteTask(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(addTaskScreen);
