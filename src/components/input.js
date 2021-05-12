import React from "react";
import styled from 'styled-components';

const Input = (props) => {
  const {detail, ...otherProps} = props;

  return (
    <Input.Container>
      <Input.InputContainer>
        <Input.Input {...otherProps}  autoComplete="off" />
      </Input.InputContainer>
      <Input.LineNumberDetail>{detail}</Input.LineNumberDetail>
    </Input.Container>
  );
};

Input.Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

Input.LineNumberDetail = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-left: 0.5rem;
`;

Input.LineText = styled.p`
  font-style: italic;
  font-size: 3rem;
  text-align: center;
  font-weight: 600;
`;

Input.Divider = styled.hr`
  width: 15rem;
  margin: 4rem 0;
  border: 0.5px solid #444444;
  opacity: 0.5;
`;

Input.Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

Input.InputContainer = styled.div`
  flex: 1;
  position: relative;
  border-bottom: 1px solid rgba(68, 68, 68, 0.5);
`;

Input.Input = styled.input`
  width: 100%;
  font-size: 2.25rem;
  color: #444444;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 500;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  border: 0;
`;

Input.Instruction = styled.p`
  font-size: 2rem;
  font-style: italic;
  font-weight: 300;
  margin-bottom: 1rem;
`;

export default Input;
