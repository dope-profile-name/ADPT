import React from 'react';
import Container from 'components/inner-layouts/ab-in-lay.css';


const AbInLay = (props) => (
   <Container style={props.style} background={props.background} display={props.display}
      nColumns={props.nColumns} gridGap={props.gridGap}>
      {props.children}
   </Container>
)

export default AbInLay;
