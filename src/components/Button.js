import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.04rem solid orange;
color: var(--mainWhite);
border-radius: 0.5rem;
border-color:${props => (props.cart ? "blue" : "orange")};
color: ${props => props.cart ? "white" : "white"};
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.3s ease-in-out;
&:hover {
  background: ${prop => prop.cart ? "blue" : "orange"};
  color: ${prop => prop.cart ? "white" : "black"};
}
&:focus {
  outline: none;
}
`;