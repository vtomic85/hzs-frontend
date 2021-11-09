import "../css/Todo.css";
import { AiFillDelete } from 'react-icons/ai';

const Todo = ({ todo, todoClicked, deleteTodo }) => {
    const handleDelete = (e) => {
        e.stopPropagation();
        deleteTodo(todo);
    }

    return (
        <div className="todo" onClick={() => todoClicked(todo)}>
            <div className={"todo-title" + (todo.completed ? " done" : "")}>{todo.title}</div>
            <div className={"todo-status" + (todo.completed ? " done" : "")}>
                {todo.completed ? "Done" : "Not done"}
                <AiFillDelete className="delete-icon" onClick={handleDelete} />
            </div>
        </div >
    );
}

export default Todo;