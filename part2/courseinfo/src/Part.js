import React from 'react';

const Part = (props) => {
  return (
    <React.Fragment>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </React.Fragment>
  );
};

export default Part;
