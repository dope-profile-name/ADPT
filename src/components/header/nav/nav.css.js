import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;

    li {
       font: 2.4rem Ubuntu Condensed;
       text-decoration: none;

      & + li {
        margin-left: 2rem;
      }

    }
}`;
