import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = (props) => (
  <Container>
    <ul>
      <li>
        <Link  to="/about">About</Link>
      </li>
      <li>
        <Link  to="/ethos">Ethos</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
