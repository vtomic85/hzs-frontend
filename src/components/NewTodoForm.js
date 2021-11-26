import "../css/NewTodoForm.css";
import { useState } from "react";

const NewTodoForm = ({ onTodoAdded }) => {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoDescription, setNewTodoDescription] = useState("");
  const [newTodoType, setNewTodoType] = useState("WORK");

  const onNewTodoTitleChanged = (e) => {
    setNewTodoTitle(e.target.value);
  };

  const onNewTodoDescriptionChanged = (e) => {
    setNewTodoDescription(e.target.value);
  };

  const onNewTodoTypeChanged = (e) => {
    setNewTodoType(e.target.value);
  };

  const addNewTodo = () => {
    onTodoAdded({
      title: newTodoTitle,
      description: newTodoDescription,
      todoItemType: newTodoType,
    });
  };

  return (
    <>
      <form
        className="middle-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="heading">Add new TODO</div>
        <div className="formHolder">
          <label htmlFor="newTodoTitle">Title: </label>
          <input
            type="text"
            id="newTodoTitle"
            autoComplete="off"
            name="newTodoTitle"
            placeholder="New TODO title"
            size="30"
            value={newTodoTitle}
            onChange={(e) => onNewTodoTitleChanged(e)}
          />
        </div>
        <div className="formHolder">
          <label htmlFor="newTodoTitle">Description: </label>
          <input
            type="text"
            id="newTodoDescription"
            autoComplete="off"
            name="newTodoDescription"
            placeholder="New TODO description"
            size="60"
            value={newTodoDescription}
            onChange={(e) => onNewTodoDescriptionChanged(e)}
          />
        </div>
        <div className="formHolder">
          <label htmlFor="newTodoType">Type: </label>
          <select value={newTodoType} onChange={(e) => onNewTodoTypeChanged(e)}>
            <option value="WORK">Work</option>
            <option value="PERSONAL">Personal</option>
            <option value="HOBBY">Hobby</option>
          </select>
        </div>
        <div className="formHolder">
          <button onClick={addNewTodo}>Add</button>
        </div>
      </form>
    </>
  );
};

export default NewTodoForm;
