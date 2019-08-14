import React from 'react';
import Part from './Part';

const Content = ({ parts }) => {
  return <React.Fragment>{parts.map((part) => <Part key={part.id} part={part} />)}</React.Fragment>;
};

export default Content;
