import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid #444444;
  border-radius: 0.5rem;
  padding: 0 5rem;
  height: 3rem;
  font-size: 1.5rem;
  color: #444444;
  font-family: 'Cormorant Garamond';
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-top: 1rem;
  background: none;
  transition: background 0.5s;
  justify-content: center;

  &:hover {
    background: #E0E0E0;
  }

  svg {
    width: 2rem;
    fill: #444444;
  }

  @media (max-width: 896px) {
    align-self: stretch;
  }
`;

export default Button;