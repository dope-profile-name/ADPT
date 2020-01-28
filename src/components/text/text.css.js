import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.span`
  font: ${props => props.font};
  border-top: ${props => props.borderTop};
  padding: 2rem 0rem;
  display: block;
  line-height: ${props => props.lineHeight}
`;

/*

${MEDIA.TABLET`
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '2.6rem';
      default:
        return '2rem';
    }
  }};
`};

font-weight: ${({ size }) => () => {
  switch (size) {
    case 'large':
      return '500';
    default:
      return '500';
  }
}};
font-size: ${({ size }) => () => {
  switch (size) {
    case 'large':
      return '3.2rem';
    default:
      return '2rem';
  }
}};
*/
