import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import styled from 'styled-components';
import Text from 'components/text';
import Nav from 'components/header/nav';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

//Styled component
const Container = styled.header`
  color: ${props => props.color};
  border-top: 12px solid ${props => props.color};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0rem 3rem 3rem;
  padding: .3rem 0rem 3rem;

  a {
     text-decoration: none;
  }
`;

const Header = ({ title }) => (
  <AnimatedContainer>
    <Container>
      <Link to="/">
        <Text as="a" font="bold 6rem Montserrat">{title}</Text>
      </Link>

      <Nav />
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  white: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
