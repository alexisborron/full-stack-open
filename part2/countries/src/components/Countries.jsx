const Countries = ({ filteredCountries, handleShow }) => {
  return (
    <div>
      {filteredCountries.map((c) => (
        <div key={c.name.common}>
          <span>{c.name.common} </span>
          <button onClick={() => handleShow(c.name.common)}>Show</button>
        </div>
      ))}
    </div>
  );
};

export default Countries;
