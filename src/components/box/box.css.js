import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
   color: ${props => props.color};
   background: ${props => props.background};
   padding: 3rem 3rem;
`;
