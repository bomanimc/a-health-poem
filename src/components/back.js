import React from "react";
import styled from 'styled-components';
// import RightArrow from "../assets/right-arrow.svg";

const Back = ({ text, onClickBack }) => (
  <Back.Link onClick={onClickBack}>{text}</Back.Link>
);

Back.Link = styled.a`
  color: #444444;
  text-decoration: none;
  align-self: start;
  margin: 2rem 0;
`;

export default Back;
