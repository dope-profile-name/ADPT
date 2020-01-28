import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

const Container = styled.div`
  display: ${props => props.display};
  grid-template-columns: repeat(${props => props.nColumns}, 1fr);
  grid-gap: ${props => props.gridGap};

  div {
     display: flex;
     flex-direction: column;
     align-contents: space-between;
     paddingTop: 3%;
  }

  h4 {
     display: flex;
     justify-content: space-between;
     margin-bottom: 9%;
  }

  p {


     margin-bottom: 1.8rem;
  }

  ${MEDIA.DESKTOP`
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0rem;
    display: block;

    div:nth-child(1) {
      padding-bottom: 3rem;
    }

  `};
`
//border-top: ${props => props.hasBorder ? `1px solid white` : `none`};
export default Container;
