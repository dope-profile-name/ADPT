import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Text from 'components/text';
import Gallery from 'components/gallery';
import ArrowBar from 'components/header/arrow-bar.js';
import CFooter from 'components/cfooter';
import Parallax from 'components/parallax';
import { graphql } from 'gatsby';

import approach from 'images/approach.jpg';

const Index = ({ data }) => (
  <Layout color="black">
    <Box style={{marginTop: `12rem`}}>
      <ArrowBar to="/about" linktext="About" />
      <Text as="h2" font="600 6rem Montserrat" lineHeight="7.2rem">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Text>
    </Box>

    <Box>
      <ArrowBar  to="/about"  linktext="Showcased Work" />
      <Gallery items={data.homeJson.gallery} />
    </Box>

    <Parallax bgImg={approach}>
      <Box style={{background: `transparent`, height:`69vh`}}>
         <ArrowBar white section style={{ textShadow: `0px 1px 2px black` }} to='/about' linktext="Approach" />
      </Box>
    </Parallax>

    <Box style={{marginBottom: `9rem`, height: `78vh`}}>
      <ArrowBar to="/about" linktext="Services" />
      <Text as="h2" style={{fontWeight: `600`, fontSize:`6rem`}} lineHeight="7.2rem">
        {data.homeJson.servicescontent.childMarkdownRemark.rawMarkdownBody}
      </Text>
    </Box>

    <CFooter />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      servicescontent {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
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
