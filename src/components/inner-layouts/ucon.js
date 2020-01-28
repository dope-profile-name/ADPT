import React from 'react';
import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import Img from 'gatsby-image';


const Container = styled.div`
  display: ${props => props.display};
  grid-template-columns: repeat(${props => props.nColumns}, 1fr);
  grid-gap: ${props => props.gridGap};

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

const Item = ({number, title, text, image}) => (
   <div>
      <div style={{borderTop: `1px solid black`, paddingTop: `3%`}}>
         <h4 style={{fontSize: `2.7rem`}}>
            <span>{title}</span><span>{number}</span>
         </h4>
         <p>{text}</p>
      </div>

      <div><Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} /></div>
   </div>
)

const InLay = ({ items, props }) => (
  <Container style={props.style}
             background={props.background}
             display={props.display}
             nColumns={props.nColumns}
             gridGap={props.gridGap}>
    {items.map((item, i) => (
      <Item {...item} key={i} />
    ))}
  </Container>
);



export default InLay;
