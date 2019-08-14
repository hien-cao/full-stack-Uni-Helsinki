import React, { useState } from 'react';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filter, setFilter ] = useState('');
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with<input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          value={filter}
        />
      </div>
      <h2>Add a new</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (persons.map((person) => person.name).includes(newName)) {
            alert(`${newName} is already added to phonebook`);
          } else {
            setPersons([ ...persons, { name: newName, number: newNumber } ]);
            setNewName('');
            setNewNumber('');
          }
        }}
      >
        <div>
          name: <input onChange={(e) => setNewName(e.target.value)} value={newName} />
        </div>
        <div>
          number: <input onChange={(e) => setNewNumber(e.target.value)} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter((person) => person.name.toLowerCase().indexOf(filter.toLowerCase()) > -1).map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default App;
