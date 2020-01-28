import React from 'react';
import { Container, CLinks, SLinks, Langs } from './cfooter.css';


const CFooter = (props) => (
   <Container white={props.white}>
         <CLinks>
            <a href="davidjbaker1994@gmail.com">Email</a>
            <a href="davidjbaker1994@gmail.com">Phone Number</a>
         </CLinks>

         <SLinks>
            <a href="www.instagram.com">Instagram</a>
            <a href="www.twitter.com">Twitter</a>
            <a href="www.facebook.com">Facebook</a>
         </SLinks>

         <Langs>
            <a href="davidjbaker1994@gmail.com">En</a>
            <a href="davidjbaker1994@gmail.com" style={{color: `grey`, fontWeight: `normal`, textDecoration: `line-through`}}>Fr</a>
         </Langs>
   </Container>

)

export default CFooter;
