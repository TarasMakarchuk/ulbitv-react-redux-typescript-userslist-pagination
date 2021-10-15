import {ITodo, TodoAction, TodoActionTypes} from "../../types/todo";
import {Dispatch} from "redux";
import axios from "axios";

declare module 'axios' {
  export interface AxiosConfig {
    _page: number;
    _limit: number;
  }
}

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({type: TodoActionTypes.FETCH_TODOS});
      const response = await axios.get<ITodo[]>(`https://jsonplaceholder.typicode.com/todos?_page=${page}}&_limit=${limit}`);
      setTimeout(() => {
        dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data});
      }, 700);
      console.log('response');
      console.log(response);
    } catch (e) {
      dispatch({type: TodoActionTypes.FETCH_TODOS_ERROR, payload: 'Server error science fetch todo list'});
    }
  };

};

export const setTodoPage = (page: number): TodoAction => {
  return {type: TodoActionTypes.SET_TODO_PAGE, payload: page};
};
