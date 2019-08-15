import React, { useState } from 'react';

const PersonForm = ({ persons, setPersons }) => {
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  return (
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
  );
};

export default PersonForm;
