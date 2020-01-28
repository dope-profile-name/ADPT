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
      <ScrollingHero height="85vh" >
         <h1 className="scroll-content">
            <span>Ethos&nbsp;—&nbsp;</span>
            <span>Ethos&nbsp;—&nbsp;</span>
            <span>Ethos&nbsp;—&nbsp;</span>
            <span>Ethos&nbsp;—&nbsp;</span>
         </h1>
      </ScrollingHero>

      <Box color="black" background="transparent">
         <AbInLay display="grid" nColumns="2" gridGap="4rem"
            style={{marginBottom: `3rem`}}>
            <div style={{borderTop: `1px solid black`, paddingTop: `3%`}}>
               <h4 style={{fontSize: `2.7rem`}}>
                  <span>Digital minded branding consultancy</span><span>01</span>
               </h4>
               <p>
                  We always start a project with a thorough analysis of what constitutes the DNA of your brand.
                  Observe, listen, and question to understand. Bringing to light what makes you unique and cultivate your difference.
                  To lay the foundations for a real reference base that can serve as a creative compass,
                  a guide for discourse and a starting point for image strategy.
                  Subsequently, this work is translated into a strong visual identity,
                  the design of relevant communication media, and the production
                  of content capable of establishing a lasting distinctive image on your market.
               </p>
            </div>

            <div><Img fluid={data.pingpong.childImageSharp.fluid} alt="uniqueness" /></div>

         </AbInLay>

         <AbInLay display="grid" nColumns="2" gridGap="4rem"
            style={{marginBottom: `3rem`}}>
            <div><Img fluid={data.atob.childImageSharp.fluid} alt="uniqueness" /></div>

            <div style={{borderTop: `1px solid black`, paddingTop: `5%`}}>
               <h4 style={{fontSize: `2.7rem`}}>
                  <span>Simple is sublime</span><span>02</span>
               </h4>
               <p style={{fontSize: `2.4rem`, lineHeight: `3rem`}}>
                  The more complex communication ecosystems become, the more we have to strive for things that are strong, obvious and essentials.
                  Our creative process is reductive. It consists in progressively getting rid of everything extraneous and cut to the essence of things.
                  This has nothing to do with what we can add, but what we can get rid of. We start with a lot, and finish with little.
                  Less but better, as Dieter Rams once said. For us, simplicity is an important step in creating permanent value, immune to the passing of time, fashions and trends.
               </p>
            </div>
         </AbInLay>

         <AbInLay display="grid" nColumns="2" gridGap="4rem"
            style={{marginBottom: `3rem`}}>
            <div style={{borderTop: `1px solid black`, paddingTop: `5%`}}>
               <h4 style={{fontSize: `2.7rem`}}>
                  <span>
         Emotion is a sparkle
                  </span>
                  <span>
         03
                  </span>
               </h4>

               <p style={{fontSize: `2.4rem`, lineHeight: `3rem`}}>
         Yes, design should be intelligent, functional yet meaningful. But above all it must awaken a spontaneous and sincere emotion. Brands are like people: only those that really touch us count. Surprising your targets with inspiring content and unique experiences creates vivid memories. Our job is to help you forge that emotional bond by igniting that spark of curiosity in the eyes of those to whom your brand is addressed. By making your brand more desirable, we initiate a virtuous dynamic: notoriety, recognition, and eventually attachment.
               </p>
            </div>
            <div><Img fluid={data.sparkler.childImageSharp.fluid} alt="uniqueness" /></div>
         </AbInLay>

         <AbInLay display="grid" nColumns="2" gridGap="4rem"
            style={{marginBottom: `3rem`}}>
            <div><Img fluid={data.ruler.childImageSharp.fluid} alt="ruler" /></div>

            <div style={{borderTop: `1px solid black`, paddingTop: `5%`}}>
               <h4 style={{fontSize: `2.7rem`}}>
                  <span>
         Nothing compares to tailor-made solutions
                  </span>
                  <span>
         04
                  </span>
               </h4>

               <p style={{fontSize: `2.4rem`, lineHeight: `3rem`}}>
         Whether it is an interface, a print object or a photographic production, we pay particular attention to all the details that make the difference between a well executed deliverable and a remarkable experience. As creative and committed partners at your side, we design tailor-made solutions adapted to your brand, your teams and your ambition. This artisanal approach to our profession pushes us to constantly innovate, by applying the highest creative and technical standards, whatever the subject we are consulted on.
               </p>
            </div>
         </AbInLay>

         <AbInLay display="grid" nColumns="2" gridGap="4rem"
            style={{marginBottom: `3rem`}}>
            <div style={{borderTop: `1px solid black`, paddingTop: `5%`}}>
               <h4 style={{fontSize: `2.7rem`}}>
                  <span>
         Content is (still) King
                  </span>
                  <span>
         05
                  </span>
               </h4>

               <p style={{fontSize: `2.4rem`, lineHeight: `3rem`}}>
         More than ever, contents are the fuel for brand visibility and the raw material for inviting us into their universe.
         In the era of social competition, producing and diffusing quality contents is crucial to
         building a truly memorable brand experience and enter peoples lives.
         Creative, generous and adapted, these contents must testify to the quality of the
         products or services that the brand offers. They also prove your ability to inspire the world and
         bring people together around an original vision.
               </p>
            </div>
            <div><Img fluid={data.glasses.childImageSharp.fluid} alt="uniqueness" /></div>
         </AbInLay>
      </Box>

      <CFooter white />

      <Parallax bgImg={services} style={{height:`100vh`}}>
        <Box style={{background: `transparent`}}>
        <ArrowBar white section to='/about' linktext="Services"
           style={{font: `bold 6rem Montserrat`, marginTop: `9rem`, textShadow: `0px 1px 2px black`}}/>
        </Box>
      </Parallax>


      <InLay items={data.ethosJson.ethosGallery} />

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
    pingpong: file(relativePath: {eq: "images/ethosGallery/pingpong.jpg"}) {
       id
       childImageSharp {
         fluid(maxWidth: 400, quality: 90) {
           ...GatsbyImageSharpFluid_withWebp
         }
       }
    }
    atob: file(relativePath: {eq: "images/ethosGallery/atob.jpg"}) {
       id
       childImageSharp {
         fluid(maxWidth: 400, quality: 90) {
           ...GatsbyImageSharpFluid_withWebp
         }
       }
    }
    sparkler: file(relativePath: {eq: "images/ethosGallery/sparkler.jpg"}) {
       id
       childImageSharp {
         fluid(maxWidth: 400, quality: 90) {
           ...GatsbyImageSharpFluid_withWebp
         }
       }
    }
    glasses: file(relativePath: {eq: "images/ethosGallery/glasses.jpg"}) {
       id
       childImageSharp {
         fluid(maxWidth: 400, quality: 90) {
           ...GatsbyImageSharpFluid_withWebp
         }
       }
    }
    ruler: file(relativePath: {eq: "images/ethosGallery/ruler.jpg"}) {
       id
       childImageSharp {
         fluid(maxWidth: 400, quality: 90) {
           ...GatsbyImageSharpFluid_withWebp
         }
       }
    }
  }
`;
