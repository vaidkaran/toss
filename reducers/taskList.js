import { ADD_TASK, DELETE_TASK } from '../actions/types';

const initialState = { taskList: [] };
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskList: state.taskList.concat({
          key: Math.random().toString(),
          name: action.data,
        }),
      };

    case DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter((item) => {
          return item.key !== action.key;
        }),
      };

    default:
      return state;
  }
}
