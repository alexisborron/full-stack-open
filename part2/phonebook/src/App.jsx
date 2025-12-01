import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [notification, setNotification] = useState({
    message: null,
    type: null
  });

  useEffect(() => {
    personService.getAll().then((initialPersons) => setPersons(initialPersons));
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    const existingPerson = persons.find(
      (p) => p.name.toLowerCase() === newName.toLowerCase()
    );
    if (existingPerson) {
      if (
        window.confirm(
          `${newName} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        const updatedPerson = { ...existingPerson, number: newNumber };
        personService
          .update(existingPerson.id, updatedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((p) =>
                p.id !== existingPerson.id ? p : returnedPerson
              )
            );
            setNewName("");
            setNewNumber("");
            setNotification({
              message: `Updated ${returnedPerson.name}`,
              type: "success"
            });
            setTimeout(
              () => setNotification({ message: null, type: null }),
              5000
            );
          })
          .catch((error) => {
            console.error(error);
            setNotification({
              message: `An unexpected error occurred`,
              type: "error"
            });
            setTimeout(
              () => setNotification({ message: null, type: null }),
              5000
            );
          });
      }
      return;
    }

    const personObject = {
      name: newName,
      number: newNumber
    };

    personService
      .create(personObject)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
        setNotification({
          message: `Added ${returnedPerson.name}`,
          type: "success"
        });
        setTimeout(() => setNotification({ message: null, type: null }), 5000);
      })
      .catch((error) => {
        console.error(error);
        setNotification({
          message: `An unexpected error occurred`,
          type: "error"
        });
        setTimeout(() => setNotification({ message: null, type: null }), 5000);
      });
  };

  const handleDelete = ({ id, name }) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .remove(id)
        .then(() => setPersons((persons) => persons.filter((p) => p.id !== id)))
        .catch((error) => {
          console.error(error);
          if (error.response?.status === 404) {
            setNotification({
              message: `Information of ${name} has already been removed from server`,
              type: "error"
            });
            setTimeout(
              () => setNotification({ message: null, type: null }),
              5000
            );
          } else {
            setNotification({
              message: `${error.message}`,
              type: "error"
            });
          }

          setPersons(persons.filter((p) => p.id !== id));
        });
    }
  };

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleSearchFilter = (event) => setSearchFilter(event.target.value);

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={notification.message} type={notification.type} />
      <Filter
        searchFilter={searchFilter}
        handleSearchFilter={handleSearchFilter}
      />
      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
