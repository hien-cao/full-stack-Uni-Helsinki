import React from 'react';

const Total = ({ parts }) => {
  const total = parts.map((part) => part.exercises).reduce((a, b) => a + b, 0);
  return (
    <React.Fragment>
      <p>Number of exercises {total}</p>
    </React.Fragment>
  );
};

export default Total;
