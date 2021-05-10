import React from "react";
import styled from 'styled-components';
import RightArrow from "../assets/right-arrow.svg";

const Details = () => {
  const lineNumber = 3;

  return (
    <Details.Content>
      <Details.Instruction>Associate some additional details with your submission to the poem.</Details.Instruction>
      {/* <Details.LineText>
        Health is...
      </Details.LineText> */}
      {/* <Details.Divider /> */}
      <Details.Form>
        <Details.InputContainer>
          <Details.Input
            input type="text"
            placeholder="Enter your contribution here" 
          />
          <Details.Submit href="/affirmation">
            <RightArrow />
          </Details.Submit>
        </Details.InputContainer>
        <Details.LineNumberDetail>
          You are contributing line {lineNumber} of the poem.
        </Details.LineNumberDetail>
      </Details.Form>
    </Details.Content>
  );
};

Details.Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

Details.LineNumberDetail = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-left: 0.5rem;
`;

Details.LineText = styled.p`
  font-style: italic;
  font-size: 3rem;
  text-align: center;
  font-weight: 600;
`;

Details.Divider = styled.hr`
  width: 15rem;
  margin: 4rem 0;
  border: 0.5px solid #444444;
  opacity: 0.5;
`;

Details.Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

Details.InputContainer = styled.div`
  flex: 1;
  position: relative;
  border-bottom: 1px solid rgba(68, 68, 68, 0.5);
  padding-right: 4rem;
`;

Details.Input = styled.input`
  width: 100%;
  font-size: 2.25rem;
  color: #444444;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 500;
  padding: 0.5rem 0 0.5rem 0.5rem;
  border: 0;
`;

Details.Submit = styled.a`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: 0;
  border: none;
  padding: 0;

  svg {
    width: 2rem;
    fill: #444444;
  }
`;

Details.Instruction = styled.p`
  font-size: 2rem;
  font-style: italic;
  font-weight: 300;
  margin-bottom: 1rem;
`;

export default Details;
