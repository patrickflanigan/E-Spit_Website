import styled from 'styled-components';
  
export const Heading = styled.h1`
   text-align: center;
   color: green;
`;
  
export const Content = styled.div`
   overflow-y: scroll;
   height: 2500px;
`;
  
export const Button = styled.div`
   position: sticky; 
   padding-top: 0px; /* Add padding around the content */
   left: 50%;
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: grey;
   transform: rotate(180deg); /* Rotate the button 180 degrees */
`