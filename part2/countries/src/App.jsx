import { useEffect, useState } from "react";
import axios from "axios";
import CountryList from "./components/CountryList";
import CountrySearch from "./components/CountrySearch";

const COUNTRY_API_URL = "https://studies.cs.helsinki.fi/restcountries/";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(`${COUNTRY_API_URL}api/all`).then((response) => {
      setCountries(response.data);
    });
  }, []);

  const matchedCountries = countries.filter((c) =>
    c.name.common.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleShow = (country) => {
    setSearch(country.name.common);
  };

  return (
    <>
      <CountrySearch search={search} handleSearch={handleSearch} />
      {search !== "" && (
        <CountryList countries={matchedCountries} showCountry={handleShow} />
      )}
    </>
  );
};
export default App;
