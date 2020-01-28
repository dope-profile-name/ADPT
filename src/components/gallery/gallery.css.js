import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-gap: 4rem;
   padding-bottom: 3rem;
   margin: 0rem;

  ${MEDIA.TABLET`
    display: block;
  `};
`;
