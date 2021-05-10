import React, { useState } from "react";
import styled from 'styled-components';
import RightArrow from "../assets/right-arrow.svg";

const NewEntry = ({ onCompleteStep }) => {
  const [text, setText] = useState('');
  const lineNumber = 3;

  const onUpdateText = (e) => {
    setText(e.target.value);
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
          <NewEntry.Input
            type="text"
            placeholder="Enter your contribution here"
            value={text}
            onChange={onUpdateText}
          />
          <NewEntry.Submit onClick={onCompleteStep}>
            <RightArrow />
          </NewEntry.Submit>
        </NewEntry.InputContainer>
        <NewEntry.LineNumberDetail>
          You are contributing line {lineNumber} of the poem.
        </NewEntry.LineNumberDetail>
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
  border-bottom: 1px solid rgba(68, 68, 68, 0.5);
  padding-right: 4rem;
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

NewEntry.Submit = styled.button`
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

NewEntry.Instruction = styled.p`
  font-size: 2rem;
  font-style: italic;
  font-weight: 300;
  margin-bottom: 1rem;
`;

export default NewEntry;
