import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";
import "../css/Todos.css";

const Todos = () => {
  const BASE_URL = process.env.REACT_APP_BACKEND_URL;
  const [todos, setTodos] = useState([]);

  const onTodoDeleted = (deletedTodo) => {
    let newTodos = todos.filter((todo) => todo.id !== deletedTodo.id);
    setTodos(newTodos);
    fetch(BASE_URL + deletedTodo.id, {
      method: "DELETE",
    });
  };

  useEffect(() => {
    const getData = () => {
      fetch(BASE_URL)
        .then((response) => response.json())
        .then((data) => setTodos(data));
    };
    getData();
  }, []);

  const onTodoClicked = (todo) => {
    let newTodo = { ...todo, isDone: !todo.isDone };
    let newTodos = todos.map((todo) =>
      todo.id === newTodo.id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(newTodos);
    const path = `${BASE_URL}/${newTodo.id}/${
      newTodo.isDone ? "done" : "not-done"
    }`;
    fetch(path, {
      method: "PUT",
    });
  };

  const onTodoAdded = (todo) => {
    let newTodos = [...todos, todo];
    setTodos(newTodos);
    fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify({
        title: todo.title,
        description: todo.description,
        todoItemType: todo.todoItemType,
        isDone: todo.isDone,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  return (
    <>
      <NewTodoForm onTodoAdded={(todo) => onTodoAdded(todo)} />
      <div className="todo-container">
        <TodoList
          todos={todos}
          onTodoClicked={onTodoClicked}
          onTodoDeleted={onTodoDeleted}
        />
      </div>
    </>
  );
};
export default Todos;
