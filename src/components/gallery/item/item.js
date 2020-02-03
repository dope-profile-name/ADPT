import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy, AnimatedContainer } from './item.css';
import { TiEye } from "react-icons/ti";

const Item = ({ title, copy, image }) => (
  <figure>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    <AnimatedContainer>
      <TiEye class="animeye" style={{display: `none`,
         margin: `0 1rem`,
         transition: `display 1s` }}/>
      <figure style={{display: `inline-block`}}>
        <Title style={{display: `inline-block`}}>{title}</Title>
        <Copy style={{display: `inline-block`}}>{copy}</Copy>
      </figure>
    </AnimatedContainer>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
