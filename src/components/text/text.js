import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './text.css';

const Text = (props) => {
  return (
    <Container font={props.font} style={props.style} as={props.as} size={props.size}
      lineHeight={props.lineHeight}>
      {props.children}
    </Container>
  );
};

Text.propTypes = {
  props: PropTypes.object.isRequired
};

export default Text;
