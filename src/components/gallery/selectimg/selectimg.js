import styled from 'styled-components';

const Selectimg = styled.div`
   height: 100vh;
   width: 100%;
   background-image: url(${props => props.bgImage});
   background-size: cover;
   background-position: center;
   display: table;

     h1 {
       font-family: sans-serif;
       font-size: 48px;
       color: #fff;
       margin: 0px;
       text-align: center;
       display: table-cell;
       vertical-align: middle;
     }
`

export default Selectimg;
