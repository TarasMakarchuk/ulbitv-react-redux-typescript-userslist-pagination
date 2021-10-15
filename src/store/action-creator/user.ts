import {IUser, UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionTypes.FETCH_USERS});
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setTimeout(() => {
        dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data});
      }, 700);
      console.log('response');
      console.log(response);
    } catch (e) {
      dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Server error science fetch users'});
    }
  };
};
