import React from 'react';

const Part = ({ part }) => {
  return (
    <React.Fragment>
      <p>
        {part.name} {part.exercises}
      </p>
    </React.Fragment>
  );
};

export default Part;
