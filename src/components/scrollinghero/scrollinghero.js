import styled, { keyframes } from 'styled-components';
import React from 'react';
/*
const sideScroll = keyframes`
  0% {
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  100% {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
`
0% {
  left: 0;
}
100% {
  left: -100%;
}
`

height: ${props => props.height};
overflow: hidden;
position: relative;

.scroll-content {
 font: bold 36vh Ubuntu;
 position: absolute;
 width: 100%;
 height: 100%;
 top: 15%;
 line-height: 30vw;
 letter-spacing: 4px;
 text-align: center;




 animation: ${sideScroll} 9s linear infinite;
}
-moz-animation: ${sideScroll} 9s linear infinite;
-webkit-animation: ${sideScroll} 9s  linear infinite;
*/

const sideScroll = keyframes`
0% {
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
}
100% {
   -moz-transform: translateX(-100%);
   -webkit-transform: translateX(-100%);
   transform: translateX(-100%);
}
 `


const Container = styled.div`

   height: ${props => props.height};
   overflow: hidden;
   position: relative;

   .scroll-content {
      font: bold 36vh Ubuntu Condensed;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 15%;
      line-height: 30vw;
      letter-spacing: 6px;
      text-align: center;

      -moz-transform:translateX(100%);
      -webkit-transform:translateX(100%);
      transform:translateX(100%);

      animation: ${sideScroll} 9s linear infinite;
      -moz-animation: ${sideScroll} 9s linear infinite;
      -webkit-animation: ${sideScroll} 9s  linear infinite;

   }
`

const ScrollingHero = (props) => (
   <Container height={props.height}>
      <h1 className="scroll-content">
         <span>{props.bannerText}&nbsp;—&nbsp;</span>
         <span>{props.bannerText}&nbsp;—&nbsp;</span>
         <span>{props.bannerText}&nbsp;—&nbsp;</span>
         <span>{props.bannerText}&nbsp;—&nbsp;</span>
      </h1>
   </Container>
)

export default ScrollingHero;
