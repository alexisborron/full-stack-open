const CountryInfo = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>
        <span>Capital: </span>
        <span>{country.capital?.[0]}</span>
      </div>
      <div>
        <span>Area: </span>
        <span>{country.area}</span>
      </div>
      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img
        src={country.flags.png}
        alt={country.flags.alt || `${country.name.common} flag`}
      />
    </div>
  );
};
export default CountryInfo;
