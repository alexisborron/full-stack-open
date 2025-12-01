import { useEffect, useState } from "react";
import axios from "axios";
import Countries from "./components/Countries";
import CountryInfo from "./components/CountryInfo";
import Filter from "./components/Filter";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  const handleSearchFilter = (event) => {
    setSearchFilter(event.target.value);
    setSelectedCountry(null);
  };

  const handleShow = (countryName) => {
    setSelectedCountry(countryName);
    setSearchFilter("");
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const searchMessage =
    filteredCountries.length > 10 && searchFilter.length > 0
      ? "Too many matches, specify another filter"
      : "";

  let countryToShow = null;

  if (selectedCountry) {
    countryToShow = selectedCountry;
  }
  if (filteredCountries.length === 1 && searchFilter.length > 0) {
    countryToShow = filteredCountries[0].name.common;
  }

  return (
    <>
      <Filter
        searchFilter={searchFilter}
        handleSearchFilter={handleSearchFilter}
      />
      {searchMessage && <p>{searchMessage}</p>}
      {filteredCountries.length > 1 && filteredCountries.length <= 10 && (
        <Countries
          filteredCountries={filteredCountries}
          handleShow={handleShow}
        />
      )}
      {countryToShow && <CountryInfo name={countryToShow} />}
    </>
  );
};
export default App;
