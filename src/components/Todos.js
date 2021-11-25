import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";
import "../css/Todos.css";
import Search from "./Search";

const Todos = () => {
  const BASE_URL = process.env.REACT_APP_BACKEND_URL;
  const [todos, setTodos] = useState([]);
  const [query, setQuery] = useState("");

  const [selectedTypes, setSelectedTypes] = useState([
    { id: 0, isSelected: false, typeName: "WORK" },
    { id: 1, isSelected: false, typeName: "PERSONAL" },
    { id: 2, isSelected: false, typeName: "HOBBY" },
  ]);

  const filteredTodos = todos.filter((item) => {
    return (
      // Compare entered text to titles and descriptions
      (item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())) &&
      // If neither type is selected, act like all of them are included
      ((!selectedTypes[0].isSelected &&
        !selectedTypes[1].isSelected &&
        !selectedTypes[2].isSelected) ||
        // If one or more types are selected, take only those ones into consideration
        (selectedTypes[0].isSelected &&
          selectedTypes[0].typeName.toLowerCase() ===
            item.todoItemType.toLowerCase()) ||
        (selectedTypes[1].isSelected &&
          selectedTypes[1].typeName.toLowerCase() ===
            item.todoItemType.toLowerCase()) ||
        (selectedTypes[2].isSelected &&
          selectedTypes[2].typeName.toLowerCase() ===
            item.todoItemType.toLowerCase()))
    );
  });

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

  const onSelectedTypesChanged = (id) => {
    const newSelectedTypes = selectedTypes.map((type) =>
      type.id !== id ? type : { ...type, isSelected: !type.isSelected }
    );
    setSelectedTypes(newSelectedTypes);
  };

  return (
    <>
      <NewTodoForm onTodoAdded={(todo) => onTodoAdded(todo)} />
      <Search
        query={query}
        onQueryChanged={(newQuery) => setQuery(newQuery)}
        selectedTypes={selectedTypes}
        onSelectedTypesChanged={(id) => onSelectedTypesChanged(id)}
      />
      <div className="todo-container">
        <TodoList
          todos={filteredTodos}
          onTodoClicked={onTodoClicked}
          onTodoDeleted={onTodoDeleted}
        />
      </div>
    </>
  );
};
export default Todos;
