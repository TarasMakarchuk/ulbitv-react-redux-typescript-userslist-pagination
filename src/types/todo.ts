export interface TodoState {
  todos: ITodo[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export interface ITodo {
  userId: number,
  id: number,
  title: string,
  completed: boolean;
}

export enum TodoActionTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
  SET_TODO_PAGE = 'SET_TODO_PAGE',
}

interface FetchTodoAction {
  type: TodoActionTypes.FETCH_TODOS
}

interface FetchTodoSuccessAction {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS;
  payload: ITodo[];
}

interface FetchTodoErrorAction {
  type: TodoActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}

interface SetPageTodoAction {
  type: TodoActionTypes.SET_TODO_PAGE,
  payload: number
}

export type TodoAction =
  FetchTodoAction
  | FetchTodoSuccessAction
  | FetchTodoErrorAction
  | SetPageTodoAction;

