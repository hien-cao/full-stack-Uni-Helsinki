import React, { useState } from 'react';

const App = () => {
  const [ persons, setPersons ] = useState([ { name: 'Arto Hellas', number: '044-1234567' } ]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default App;
