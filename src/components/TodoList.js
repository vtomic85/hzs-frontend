import Todo from "./Todo";

const TodoList = ({ todos, onTodoClicked, onTodoDeleted }) => {
  return (
    <>
      {
        // If there are todos...
        todos &&
          todos.map((todo, i) => (
            <Todo
              key={i}
              todo={todo}
              todoClicked={(todo) => onTodoClicked(todo)}
              deleteTodo={(todo) => onTodoDeleted(todo)}
            />
          ))
      }
      {
        // If there are no todos (yet)...
        !todos && <p>Loading...</p>
      }
    </>
  );
};

export default TodoList;
