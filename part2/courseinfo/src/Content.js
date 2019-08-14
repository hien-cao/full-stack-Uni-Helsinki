import React from 'react';
import Part from './Part';

const Content = (props) => {
  return <React.Fragment>{props.parts.map((part) => <Part part={part} />)}</React.Fragment>;
};

export default Content;
