import React, { useState } from "react";
import styled from 'styled-components';
import Input from "./input";
import RightArrow from "../assets/right-arrow.svg";

const NewEntry = ({ contribution, onCompleteStep }) => {
  const [text, setText] = useState(contribution);
  const lineNumber = 3;

  const onUpdateText = (e) => {
    setText(e.target.value);
  };

  const onSubmit = () => {
    onCompleteStep(text);
  };

  return (
    <NewEntry.Content>
      <NewEntry.Instruction>Describe health in your own words.</NewEntry.Instruction>
      <NewEntry.LineText>
        Health is...
      </NewEntry.LineText>
      <NewEntry.Divider />
      <NewEntry.Form>
        <NewEntry.InputContainer>
          <Input
            id="name" 
            placeholder="Name" 
            detail={`You are contributing line ${lineNumber} of the poem.`}
            placeholder="Enter your contribution here"
            value={text}
            onChange={onUpdateText}
          />
        </NewEntry.InputContainer>
        <NewEntry.Submit onClick={onSubmit}>
          <RightArrow />
        </NewEntry.Submit>
      </NewEntry.Form>
    </NewEntry.Content>
  );
};

NewEntry.Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

NewEntry.LineNumberDetail = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-left: 0.5rem;
`;

NewEntry.LineText = styled.p`
  font-style: italic;
  font-size: 3rem;
  text-align: center;
  font-weight: 600;
`;

NewEntry.Divider = styled.hr`
  width: 15rem;
  margin: 4rem 0;
  border: 0.5px solid #444444;
  opacity: 0.5;
`;

NewEntry.Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

NewEntry.InputContainer = styled.div`
  flex: 1;
  position: relative;
`;

NewEntry.Input = styled.input`
  width: 100%;
  font-size: 2.25rem;
  color: #444444;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 500;
  padding: 0.5rem 0 0.5rem 0.5rem;
  border: 0;
`;

NewEntry.Instruction = styled.p`
  font-size: 2rem;
  font-style: italic;
  font-weight: 300;
  margin-bottom: 1rem;
`;

NewEntry.Submit = styled.button`
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
  align-self: end;
  margin-top: 1rem;
  background: none;
  transition: background 0.5s;

  &:hover {
    background: #A0A0A0;
  }

  svg {
    width: 2rem;
    fill: #444444;
  }
`;


export default NewEntry;
