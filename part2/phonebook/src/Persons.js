import React from 'react';

const Persons = ({ persons, filter }) => {
  return (
    <div>
      {persons.filter((person) => person.name.toLowerCase().indexOf(filter.toLowerCase()) > -1).map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default Persons;
