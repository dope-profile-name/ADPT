import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-gap: 4.5rem;
   padding-bottom: 0rem 3rem 3rem;
   margin: 0rem .09rem;



  ${MEDIA.TABLET`
    display: block;
  `};
`;
