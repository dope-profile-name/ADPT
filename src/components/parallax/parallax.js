import styled from 'styled-components';



const Parallax = styled.div`
   background-image: url(${props => props.bgImg});
   min-height: 500px;
   background-attachment: fixed;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   position: relative;
   text-align: center;

`

/*perspective: 1px;
height: 100vh;
overflow-x: hidden;
overflow-y: auto;

.parallax-group {
  position: relative;
  height: 100vh;
  transform-style: preserve-3d;
}

.parallax-layer {
   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
}

.parallax-layer-base {
   transform: translateZ(0);
}

.parallax-layer-back {
   background-image: url(${services});
   transform: translateZ(-1px);
}*/

export default Parallax;
