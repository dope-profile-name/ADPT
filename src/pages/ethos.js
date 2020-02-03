import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Box from 'components/box';
import Layout from 'components/layout';
import Head from 'components/head';
import ScrollingHero from 'components/scrollinghero';
import AbInLay from 'components/inner-layouts/ab-in-lay.js';
import ArrowBar from 'components/header/arrow-bar';
import Text from 'components/text';
import CFooter from 'components/cfooter';
import Parallax from 'components/parallax';
import InLay from 'components/inner-layouts/ucon.js';
import { graphql } from 'gatsby';

import services from 'images/services.jpg';


const Ethos = ({ data }) => (
   <Layout color="black" bgColor="#CCCCCC">
      <ScrollingHero height="85vh" bannerText={data.ethosJson.title} />

      <Box>
         <InLay items={data.ethosJson.ethosGallery} />
      </Box>

      <CFooter white />

      <Parallax bgImg={services} style={{height: `100vh`}}>
        <Box style={{background: `transparent`}}>
        <ArrowBar white section to='/about' linktext="Services"
           style={{font: `bold 6rem Montserrat`, marginTop: `9rem`, textShadow: `0px 1px 2px black`}}/>
        </Box>
      </Parallax>
   </Layout>
);

Ethos.propTypes = {
  data: PropTypes.object.isRequired
};

export default Ethos;

export const query = graphql`
  query EthosQuery {
    ethosJson {
      title
      ethosGallery {
         number
         title
         text
         image {
           childImageSharp {
             fluid(maxHeight: 500, quality: 90) {
               ...GatsbyImageSharpFluid_withWebp
             }
           }
         }
      }
    }
  }
`;
