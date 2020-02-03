import React from 'react';
import PropTypes from 'prop-types';
import Box from 'components/box';
import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import Img from 'gatsby-image';


const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4.5%;
  padding-bottom: 4.5%;

  div {
     display: flex;
     flex-direction: column;
     align-contents: space-between;
     paddingTop: 3%;
  }

  h4 {
     display: flex;
     justify-content: space-between;
     margin-bottom: 9%;
  }

  p {
     margin-bottom: 1.8rem;
  }

  ${MEDIA.DESKTOP`
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0rem;
    display: block;

    div:nth-child(1) {
      padding-bottom: 3rem;
    }

  `};
`


const Item = ({number, title, text, image, index}) => {
   if (index % 2 === 0) {
      return (
         <Container className="innerSection">
            <div style={{borderTop: `1px solid black`, paddingTop: `3%`}}>
               <h4>
                  <span>{title}</span><span>{number}</span>
               </h4>
               <p>{text}</p>
            </div>

            <div className="imgHolder"><Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} /></div>
         </Container>
      );

   }

   return (
      <Container>
         <div className="imgHolder"><Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} /></div>

         <div style={{borderTop: `1px solid black`, paddingTop: `3%`}}>
            <h4>
               <span>{title}</span><span>{number}</span>
            </h4>
            <p>{text}</p>
         </div>
      </Container>
   );
};


Item.propTypes = {
  number: PropTypes.object.isRequired,
  title: PropTypes.object.isRequired,
  text: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
  key: PropTypes.object.isRequired,
};


const InLay = ({ items }) => (
  <Box>
    {items.map((item, i) => (
      <Item {...item} key={i} index={i} />
    ))}
  </Box>
);




export default InLay;
