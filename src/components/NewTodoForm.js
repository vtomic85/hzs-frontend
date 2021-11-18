import {useState} from "react";

const NewTodoForm = ({onTodoAdded}) => {
    const [newTodoTitle, setNewTodoTitle] = useState('');

    const onNewTodoChanged = (e) => {
        setNewTodoTitle(e.target.value)
    }

    const addNewTodo = () => {
        onTodoAdded({title: newTodoTitle, completed: false});
    }

    return (
        <>
            <form>
                <input type="text" placeholder="New TODO" value={newTodoTitle} onChange={(e) => onNewTodoChanged(e)}/>
                <button onClick={addNewTodo}>Add</button>
            </form>
        </>
    );
}

export default NewTodoForm;