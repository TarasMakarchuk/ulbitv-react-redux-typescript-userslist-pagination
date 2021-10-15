import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const TodoList: React.FC = () => {
  const {todos, loading, error, page, limit} = useTypedSelector(state => state.todo);
  const {fetchTodos, setTodoPage} = useActions();
  const pages = [1,2,3,4,5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }


  return (
    <div>
      {todos.map(todo =>
      <div key={todo.id}>
        {todo.id} - {todo.title}, <input type="checkbox" checked={todo.completed}/>
      </div>)}

      <div style={{display: 'flex'}}>
        {pages.map(item =>
          <div
            key={item}
            onClick={() => setTodoPage(item)}
            style={{border: item === page ? '2px solid lightblue' : '1px solid lightblue', padding: 10}}
          >
            {item}
          </div>)}
      </div>

    </div>
  );
};

export default TodoList;
