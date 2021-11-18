import Todo from "./Todo";

const TodoList = ({todos, onTodoClicked, onTodoDeleted}) => {
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

export default TodoList;