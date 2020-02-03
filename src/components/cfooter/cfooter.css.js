import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';


export const Container = styled.div`
   background: white !important;
   border-top: 1px solid black;
   display: flex;
   flex-wrap: wrap;


   div {
      padding: 1.8rem 0rem 1.8rem 1.8rem;

      a {
         color: black;
         font: bold 2.1rem Ubuntu;
         margin-right: 4.5%;
         text-decoration: none;
      }
   }

   div:nth-child(4) {
      border-right: 1px solid black;
   }

   ${MEDIA.TABLET`
      border-top: none;
      width: 100%;

      div:nth-child(2) {
         border-right: 1px solid lightgrey;
      }

      div:nth-child(6) {
         border-right: 1px solid lightgrey;
      }
   `};
`;

export const CLinksGrouped = styled.div`
   display: inline-block;
   order: 1;
   width: 40%;

   ${MEDIA.TABLET`
      display: none;
      justify-content: center;
      width: 50%;
      border-bottom: 1px solid lightgrey;
   `};
`;

export const CLinks = styled.div`
   border-top: 1px solid lightgrey;
   box-sizing: border-box;
   display: inline-block;
   order: 1;
   display: none;

   ${MEDIA.TABLET`
      display: flex;
      justify-content: center;
      width: 50%;
      border-bottom: 1px solid lightgrey;
   `};
`;

export const SLinks = styled.div`
   box-sizing: border-box;
   display: inline-block;
   order: 2;
   width: 45%;
   text-align: right;

   ${MEDIA.TABLET`
      order: 3;
      display: none;
      text-align: center;
      width: 100%;
   `};
`;

export const Smicon = styled.div`
   display: none;

   .tsi {
      margin-right: 9rem;
   }
   .tsi:nth-child(1) {
      margin-left: 7.5rem;
   }

   ${MEDIA.TABLET`
      border-bottom: 1px solid lightgrey;
      display: flex;
      justify-content: center;
      width: 100%;
      order: 3;
   `};
`;

export const Langs = styled.div`
   box-sizing: border-box;
   display: inline-block;
   width: 5%;
   order: 3;
   text-align: center;

   ${MEDIA.TABLET`
      border-bottom: 1px solid lightgrey;
      display: flex;
      justify-content: center;
      width: 50%;
      order: 2;
   `};
`;
