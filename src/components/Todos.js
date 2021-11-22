import {useEffect, useState} from "react";
import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";

const Todos = () => {
    const BASE_URL = 'https://hzs-todo.herokuapp.com/todo-items/';
    const [todos, setTodos] = useState([]);

    const getData = () => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(data => setTodos(data));
    }

    const onTodoDeleted = (deletedTodo) => {
        let newTodos = todos.filter(todo => todo.id !== deletedTodo.id);
        setTodos(newTodos);
        fetch(BASE_URL + deletedTodo.id, {
            method: 'DELETE',
        });
    }

    useEffect(() => getData(),
        []);

    const onTodoClicked = (todo) => {
        let newTodo = {...todo, isDone: !todo.isDone};
        let newTodos = todos.map(todo => todo.id === newTodo.id ?
            {...todo, isDone: !todo.isDone} :
            todo);
        setTodos(newTodos);
        const path = `${BASE_URL}/${newTodo.id}/${newTodo.isDone ? 'done' : 'not-done'}`;
        fetch(path, {
            method: 'PUT'
        });
    }

    const onTodoAdded = (todo) => {
        let newTodos = [...todos, todo];
        setTodos(newTodos);
        fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify({
                title: todo.title,
                description: todo.description,
                todoItemType: todo.todoItemType,
                isDone: todo.isDone
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }

    return (
        <>
            <NewTodoForm onTodoAdded={(todo) => onTodoAdded(todo)}/>
            <TodoList todos={todos} onTodoClicked={onTodoClicked} onTodoDeleted={onTodoDeleted}/>
        </>
    );
}
export default Todos;