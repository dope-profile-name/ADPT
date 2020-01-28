import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';


export const Container = styled.div`
   background: white;
   border-top: 1px solid black;
   border-bottom: 1px solid black;
   justify-content: space-evenly;
   display: flex;

   position: relative;

   div {
      padding: 2rem 2rem;

      a {
         color: black;
         font: bold 1.8rem Ubuntu;
         margin-left: 3.6rem;
         text-decoration: none;
      }
   }

   ${MEDIA.TABLET`
      display: block;
   `}
`;

export const CLinks = styled.div`
   flex-basis: 40%;
   display: flex;
   justify-content: flex-start;
   align-self: flex-start;

   a:nth-child(1) {
      margin-left: 0;
   }

   ${MEDIA.TABLET`
      display: block;
   `}
`;

export const SLinks = styled.div`
   flex-basis: 40%;
   display: flex;
   justify-content: flex-end;

   ${MEDIA.TABLET`
      display: block;
   `}
`;

export const Langs = styled.div`
   border-left: 1px solid black;
   display: flex;
   justify-content: space-evenly;
   flex-basis: 10%;
   align-self: flex-end;

   a {
      margin: 0 !important;
   }

   ${MEDIA.TABLET`
      display: block;
   `}
`;
