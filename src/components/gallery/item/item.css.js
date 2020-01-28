import styled, {keyframes} from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { Link } from 'gatsby';

export const Title = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem;
`;

export const Copy = styled.p`
  color: #757575;
  font-size: 1rem;
  margin: 0rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;

/*fix the animation with keyframes*/
export const AnimatedContainer = styled(Link)`
  display: flex;
  align-items: baseline;
  margin-top: 0rem;
  margin-bottom: 0rem;
  padding: 0;

  &:hover .animeye {
   	display: inline-block !important;
   }
`
