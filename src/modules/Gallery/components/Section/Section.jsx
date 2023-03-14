import React from 'react';
import './Section.scss';

const Section = (props) => {
  return <section className='gallery'>{props.children}</section>;
};

export default Section;
