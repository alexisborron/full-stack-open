import CountryInfo from "./CountryInfo";
import Weather from "./Weather";
const CountryList = ({ countries, showCountry }) => {
  if (countries.length > 1) {
    return countries.map((c) => (
      <div key={c.name.common}>
        <span>{c.name.common} </span>
        <button onClick={() => showCountry(c)}>Show</button>
      </div>
    ));
  }
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter.</p>;
  }
  if (countries.length === 1) {
    return (
      <>
        <CountryInfo country={countries[0]} />
        <Weather country={countries[0]} />
      </>
    );
  }
};

export default CountryList;
