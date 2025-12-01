const Filter = ({ searchFilter, handleSearchFilter }) => {
  return (
    <div>
      <span>Find countries </span>
      <input onChange={handleSearchFilter} type="text" value={searchFilter} />
    </div>
  );
};

export default Filter;
