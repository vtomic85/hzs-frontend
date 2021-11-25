import "../css/Search.css";

const Search = ({
  query,
  selectedTypes,
  onSelectedTypesChanged,
  onQueryChanged,
}) => {
  return (
    <form>
      <label htmlFor="searchQuery">Search: </label>
      <input
        type="search"
        id="searchQuery"
        name="searchQuery"
        size="50"
        placeholder="Search for TODOs"
        value={query}
        onChange={(e) => onQueryChanged(e.target.value)}
      />
      {selectedTypes.map((type) => {
        return (
          <button
            key={type.id}
            type="button"
            className={`filterButton  ${type.isSelected ? "active" : ""}`}
            onClick={() => onSelectedTypesChanged(type.id)}
          >
            {type.typeName}
          </button>
        );
      })}
    </form>
  );
};
export default Search;
