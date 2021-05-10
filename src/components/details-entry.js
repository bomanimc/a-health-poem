import React from "react";
import styled from 'styled-components';
import { useFormik } from 'formik';
import Input from "./input";
import RightArrow from "../assets/right-arrow.svg";

const Details = ({ details, onCompleteStep, onBack }) => {
  const {values, getFieldProps, handleSubmit} = useFormik({
    initialValues: {
      name: '',
      location: '',
      ...details,
    },
    onSubmit: values => onCompleteStep(values),
  });

  const onClickBack = () => {
    onBack(values);
  }

  return (
    <Details.Content>
      <Details.Back onClick={onClickBack}>Edit Your Contribution</Details.Back>
      <Details.Instruction>
        Optionally, add some additional information that will
        allow your specific contribution to be credited.
      </Details.Instruction>
      <Details.Form onSubmit={handleSubmit}>
        <Input 
          id="name" 
          placeholder="Name" 
          detail="Enter your name"
          {...getFieldProps("name")}
        />
        <Input 
          id="location" 
          placeholder="City, State, Country)" 
          detail="Enter your general location (i.e. city, state, country)"
          {...getFieldProps("location")}
        />
        <Details.Submit type="submit">
          <RightArrow />
        </Details.Submit>
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

Details.Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3rem;
  margin-top: 3rem;
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

Details.Instruction = styled.p`
  font-size: 2rem;
  font-style: italic;
  font-weight: 300;
  margin-bottom: 1rem;
`;

Details.Submit = styled.button`
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
  justify-self: end;
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

Details.Back = styled.a`
  color: #444444;
  text-decoration: none;
  align-self: start;
  margin: 2rem 0;
`;

export default Details;
