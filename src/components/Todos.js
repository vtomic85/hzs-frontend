import { useEffect, useState } from "react";
import Todo from "./Todo";

const Todos = () => {
    const [todos, setTodos] = useState([]);

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => setTodos(data));
    }

    const onTodoClicked = (todo) => {
        let newTodo = { ...todo, completed: !todo.completed };
        let newTodos = todos.map(todo => todo.id === newTodo.id ?
            { ...todo, completed: !todo.completed } :
            todo);
        setTodos(newTodos);
    }

    const onTodoDeleted = (deletedTodo) => {
        let newTodos = todos.filter(todo => todo.id !== deletedTodo.id);
        setTodos(newTodos);
    }

    useEffect(() => getData(),
        []);

    if (todos) {
        return todos.map((todo, i) =>
            <Todo
                key={i}
                todo={todo}
                todoClicked={(todo) => onTodoClicked(todo)}
                deleteTodo={(todo) => onTodoDeleted(todo)}
            />)
    } else {
        return <p>Loading...</p>
    }

}

export default Todos;