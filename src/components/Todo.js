import "../css/Todo.css";
import { AiFillDelete } from "react-icons/ai";

const Todo = ({ todo, todoClicked, deleteTodo }) => {
  const handleDelete = (e) => {
    e.stopPropagation();
    deleteTodo(todo);
  };

  return (
    <div className="todo-holder" onClick={() => todoClicked(todo)}>
      <div className={"todo-content" + (todo.isDone ? " done" : "")}>
        <div>
          <div className="todo-h3-title">{todo.title}</div>
          <span className="todo-type">{todo.todoItemType}</span>
        </div>
        <div>
          <p className="todo-description">{todo.description}</p>
        </div>
      </div>
      <div className={"todo-status" + (todo.isDone ? " done" : "")}>
        {todo.isDone ? "Done" : "Not done"}
        <AiFillDelete className="delete-icon" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Todo;
