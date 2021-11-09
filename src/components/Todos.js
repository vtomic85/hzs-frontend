import { useEffect, useState } from "react";
import Todo from "./Todo";

const Todos = () => {
    const [todos, setTodos] = useState([]);

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => setTodos(data));
    }

    useEffect(() => getData(),
        []);

    if (todos) {
        return todos.map((todo, i) => <Todo key={i} todo={todo} />)
    } else {
        return <p>Loading...</p>
    }

}

export default Todos;