import {useEffect, useState} from "react";
import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";

const Todos = () => {
    const [todos, setTodos] = useState([]);

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => setTodos(data));
    }

    const onTodoDeleted = (deletedTodo) => {
        let newTodos = todos.filter(todo => todo.id !== deletedTodo.id);
        setTodos(newTodos);
        fetch('https://jsonplaceholder.typicode.com/todos/' + deletedTodo.id, {
            method: 'DELETE',
        });
    }

    useEffect(() => getData(),
        []);

    const onTodoClicked = (todo) => {
        let newTodo = {...todo, completed: !todo.completed};
        let newTodos = todos.map(todo => todo.id === newTodo.id ?
            {...todo, completed: !todo.completed} :
            todo);
        setTodos(newTodos);
        fetch('https://jsonplaceholder.typicode.com/todos/' + todo.id, {
            method: 'PUT',
            body: JSON.stringify({
                userId: todo.userId,
                id: todo.id,
                title: todo.title,
                completed: newTodo.completed
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
    }

    const addNewTodo = (todo) => {
        let newTodos = [...todos, todo];
        setTodos(newTodos);
        fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify({
                title: todo.title,
                completed: todo.completed
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }

    return (
        <>
            <NewTodoForm onTodoAdded={(todo) => addNewTodo(todo)}/>
            <TodoList todos={todos} onTodoClicked={onTodoClicked} onTodoDeleted={onTodoDeleted}/>
        </>
    );
}
export default Todos;