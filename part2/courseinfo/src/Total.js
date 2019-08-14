import React from 'react';

const Total = ({ parts }) => {
  const total = parts.reduce((a, b) => a + b.exercises, 0);
  return (
    <React.Fragment>
      <p>Total of {total} exercises</p>
    </React.Fragment>
  );
};

export default Total;
