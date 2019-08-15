import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div>
      Filter shown with<input
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        value={filter}
      />
    </div>
  );
};

export default Filter;
