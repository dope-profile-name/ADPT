import React from 'react';
import styled, {keyframes} from 'styled-components';
import { TiArrowRight } from 'react-icons/ti';
import { Link } from 'gatsby';


const keyFrameOne = keyframes`
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  20% {
     opacity: 0.8;
  }
  40% {
     opacity: 0.5;
  }
  60% {
     opacity: 0.1;
  }
  80% {
     opacity: 0.05;
  }

  100% {
    -webkit-transform: translateX(45px);
            transform: translateX(45px);
   opacity: 0;
}
`

const AnimeBar = styled(Link)`
  color: ${props => props.white ? 'white' : 'black'};
  font: ${props =>props.section ? 'bold 6rem Montserrat' :
         'bold 1.5rem Montserrat'};
  margin-top: ${props =>props.section ? '7.2rem' :
                '0'};
  display: flex;
  padding: 2rem 0rem;
  justify-content: space-between;
  text-decoration: none;
  border-top: ${props => props.white ? '1px solid white' : '1px solid black'};

  &:hover .animated-arrow {
    animation: ${keyFrameOne} .3s ease-in-out 0s 1;
  }
`


const ArrowBar = (props) => (
     <AnimeBar white={props.white} section={props.section} style={props.style}  to={props.to} >
     {props.linktext}
         <TiArrowRight class="animated-arrow" style={{display:`inline-block`, fontSize:`1rem`}}/>
     </AnimeBar>
);

export default ArrowBar;
