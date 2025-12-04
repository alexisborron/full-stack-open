const CountrySearch = ({ search, handleSearch }) => {
  return (
    <div>
      <span>Find countries </span>
      <input onChange={handleSearch} type="text" value={search} />
    </div>
  );
};

export default CountrySearch;
