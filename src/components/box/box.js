import React from 'react';
//import PropTypes from 'prop-types';
import { Container } from './box.css';

const Box = (props) => <Container white={props.white} style={props.style}>{props.children}</Container>;



export default Box;
