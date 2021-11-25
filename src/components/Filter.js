import { useState } from "react";

const Filter = ({ onTodosFiltered }) => {
  const [filterText, setFilterText] = useState("");

  const onFilterTextChanged = (e) => {
    setFilterText(e.target.value);
    onTodosFiltered(filterText);
  };

  return (
    <div className="filter">
      <form>
        <label htmlFor="filterText">Search: </label>
        <input
          type="text"
          name="filterText"
          id="filterText"
          autoComplete="off"
          placeholder="Enter a search string"
          size="30"
          value={filterText}
          onChange={(e) => onFilterTextChanged(e)}
        />
      </form>
    </div>
  );
};
export default Filter;
