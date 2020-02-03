import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;

    li {
       text-decoration: none;

      & + li {
        margin-left: 2rem;
      }

    }
}`;
