import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Box from 'components/box';
import Layout from 'components/layout';
import ScrollingHero from 'components/scrollinghero';
import AbInLay from 'components/inner-layouts/ab-in-lay.js';
import ArrowBar from 'components/header/arrow-bar';
import Text from 'components/text';
import CFooter from 'components/cfooter';
import Parallax from 'components/parallax';
import { graphql } from 'gatsby';

import services from 'images/services.jpg';

const About = ({ data }) => (
   <Layout color="white" bgColor="#E9846F">
      <ScrollingHero height="85vh">
         <h1 className="scroll-content">
            <span>—&nbsp;About&nbsp;</span>
            <span>—&nbsp;About&nbsp;</span>
            <span className="delayed">—&nbsp;About&nbsp;</span>
            <span className="delayed">—&nbsp;About&nbsp;</span>
         </h1>
      </ScrollingHero>

      <Box white>
         <Text as="h4" font="bold 1.5rem Montserrat"
            style={{borderTop: `1px solid white`, padding: `2rem 0rem`}}>
         Profile</Text>

         <AbInLay display="grid" nColumns="2" gridGap="4rem" fontFamily="Montserrat" style={{margin:`3rem 0rem 0rem`}}>
            <div>
               <h2>
         Digital minded branding consultancy
               </h2>
            </div>
            <div>
               <p>
         Beaubourg was born in 2014 from the association of Mickael Tsakiris and Sylvain Capeyron.
         In a rapidly changing market of digital studios and agencies,
         the atypical nature of this duo (strategy + design) has enabled it from the
         outset to envisage projects from a new creative angle: starting with the brand and
         bringing out its truth through design, considering digital touchpoints a high-priority.&nbsp;
         The arrival of Rémy Blamaud (formerly Octave &amp; Octave) as Lead Developer has enabled
         Beaubourg to take the vision initiated by Sylvain and Mickael a step further, by adding the technical
         scope of the projects.&nbsp;
               </p>
               <p>
         Today, we are&nbsp;a team of 5&nbsp;articulated around 2 partners with complementary profiles and experiences validated in agencies and within brands.
         A growing consultancy that teams up with brands and takes charge of their projects as a whole,
         without having to outsource a key skill or know-how. This approach allows us to guarantee a high
         level of quality to the deliverables we produce for our customers.
               </p>
            </div>
         </AbInLay>
      </Box>

      <Box white>
         <Text as="h4" font="bold 1.5rem Montserrat"
            style={{borderTop: `1px solid white`}}>
         Offices</Text>

         <Text as="h2" font="bold 7.5rem Montserrat" style={{marginBottom:`3rem`}}>
         Our offices are located in Midtown, Atlanta. Stop by and say hi!</Text>

         <AbInLay display="grid" nColumns="2" gridGap="4rem">
            <div><Img fluid={data.atlanta.childImageSharp.fluid} alt="atlanta" /></div>

            <div style={{borderTop: `6px solid white`, display:`flex`, flexDirection: `column`, font: `2.7rem Ubuntu`,
               paddingTop: `3.6rem`, paddingBottom: `6rem`, lineHeight: `3.9rem`, position: `relative`}}>
               <div style={{marginBottom: `.6rem`}}>
                  <div style={{marginBottom: `.3rem`}}>36, boulevard de la Bastille</div>
                  <div>75012, Paris</div>
                  <div style={{marginBottom: `.3rem`}}>view on google maps</div>
                  <div style={{marginBottom: `7.2rem`}}>T. +33 (6) 12 15 37 76</div>

               </div>

               <div style={{position: `absolute`, bottom: `4.5%`, width: `100%`, display: `block`, borderBottom: `2px solid white`}}>
                  <ArrowBar white to="/about" linktext="Instagram" style={{font: `1.8rem Montserrat`, padding:`.3rem 0rem`}} />
                  <ArrowBar white to="/about" linktext="Twitter" style={{font: `1.8rem Montserrat`, padding:`.3rem 0rem`}} />
                  <ArrowBar white to="/about" linktext="Facebook" style={{font: `1.8rem Montserrat`, padding:`.3rem 0rem`}} />
               </div>
            </div>
         </AbInLay>
      </Box>

      <CFooter white />

      <Parallax bgImg={services} style={{height:`100vh`}}>
        <Box style={{background: `transparent`}}>
           <ArrowBar white section to='/about' linktext="Services"
              style={{font: `bold 6rem Montserrat`, marginTop: `9rem`, textShadow: `0px 1px 2px black`}}/>
        </Box>
      </Parallax>

   </Layout>
);

About.propTypes = {
  data: PropTypes.object.isRequired,
};


export default About;

export const query = graphql`
  query AboutQuery {
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
    atlanta: file(relativePath: {eq: "images/aboutGallery/atlanta_rs.jpg"}) {
       id
       childImageSharp {
         fluid(maxHeight: 360, quality: 90) {
           ...GatsbyImageSharpFluid_withWebp
         }
       }
    }
  }
`;
