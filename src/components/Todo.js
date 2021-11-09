import "../css/Todo.css";

const Todo = ({ todo }) => {
    return (
        <div className="todo">
            <div className={"todo-title" + (todo.completed ? " done" : "")}>{todo.title}</div>
            <div className={"todo-status" + (todo.completed ? " done" : "")}>{todo.completed ? "Done" : "Not done"}</div>
        </div >
    );
}

export default Todo;