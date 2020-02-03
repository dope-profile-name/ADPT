import React from 'react';
import { Container, CLinks, CLinksGrouped, SLinks, Smicon, Langs } from './cfooter.css';
import { TiSocialTwitter, TiSocialFacebook, TiSocialInstagram } from 'react-icons/ti';


const CFooter = (props) => (
   <Container white={props.white}>
      <CLinksGrouped>
         <a href="davidjbaker1994@gmail.com">Email</a>
         <a href="davidjbaker1994@gmail.com">Phone Number</a>
      </CLinksGrouped>

      <CLinks>
         <a href="davidjbaker1994@gmail.com">Email</a>
      </CLinks>

      <CLinks>
         <a href="davidjbaker1994@gmail.com">Phone Number</a>
      </CLinks>

      <SLinks>
         <a href="www.instagram.com">Instagram</a>
         <a href="www.twitter.com">Twitter</a>
         <a href="www.facebook.com">Facebook</a>
      </SLinks>

      <Smicon>
         <TiSocialInstagram className="tsi" size="30px" />
         <TiSocialTwitter className="tsi" size="30px" />
         <TiSocialFacebook className="tsi" size="30px" />
      </Smicon>

      <Langs>
         <a href="davidjbaker1994@gmail.com">En</a>
      </Langs>

      <Langs className="french">
         <a href="davidjbaker1994@gmail.com"
            style={{color: `grey`, fontWeight: `normal`, textDecoration: `line-through`}}>
               Fr</a>
      </Langs>
   </Container>
)

export default CFooter;
