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
    <Box style={{margin: `7.2rem auto`}}>
      <ArrowBar to="/about" linktext="About" />
      <Text as="h2" lineHeight="7.5rem">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Text>
    </Box>

    <Box style={{marginBottom: `7.2rem`}}>
      <ArrowBar  to="/about"  linktext="Showcased Work" />
      <Gallery items={data.homeJson.gallery} />
    </Box>

    <Parallax bgImg={approach}>
      <Box style={{background: `transparent`, height:`72vh`}}>
         <ArrowBar white section style={{ marginTop: `9rem`, textShadow: `0px 1px 2px black` }} to='/about' linktext="Approach" />
      </Box>
    </Parallax>

    <Box style={{margin: `6.9rem 0rem 9rem 0rem`}}>
      <ArrowBar to="/about" linktext="Services" />
      <Text as="h2" lineHeight="7.5rem">
        {data.homeJson.servicescontent.childMarkdownRemark.rawMarkdownBody}
      </Text>
    </Box>

    <Box style={{padding: `0rem`}}>
      <CFooter />
    </Box>
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
            fluid(maxHeight: 600, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
