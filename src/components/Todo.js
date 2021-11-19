import "../css/Todo.css";
import {AiFillDelete} from 'react-icons/ai';

const Todo = ({todo, todoClicked, deleteTodo}) => {
    const handleDelete = (e) => {
        e.stopPropagation();
        deleteTodo(todo);
    }

    return (
        <div className="todo-container" onClick={() => todoClicked(todo)}>
            <div className={"todo-content" + (todo.completed ? " done" : "")}>
                <div>
                    <div className="todo-h3-title">{todo.title}</div>
                    <span className="todo-type">{todo.todoItemType}</span>
                </div>
                <div>
                    <p className="todo-description">{todo.description}</p>
                </div>
            </div>
            <div className={"todo-status" + (todo.completed ? " done" : "")}>
                {todo.completed ? "Done" : "Not done"}
                <AiFillDelete className="delete-icon" onClick={handleDelete}/>
            </div>
        </div>
    );
}

export default Todo;