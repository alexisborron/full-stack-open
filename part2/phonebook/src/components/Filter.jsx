const Filter = ({ searchFilter, handleSearchFilter }) => {
  return (
    <div>
      <span>Filter shown with </span>
      <input value={searchFilter} onChange={handleSearchFilter} />
    </div>
  );
};

export default Filter;
