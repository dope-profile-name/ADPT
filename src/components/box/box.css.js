import styled from 'styled-components';

export const Container = styled.div`
   color: ${props => props.color};
   background: ${props => props.background};
   padding: 3rem 4rem 1rem 4rem;
   `;

//border-top: ${props => (props.white ? '1px solid white' : 'none')};
