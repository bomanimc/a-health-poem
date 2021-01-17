import React from "react";
import styled from 'styled-components';
import RightArrow from "../assets/right-arrow.svg";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ContributePage = () => {
  const lineNumber = 3;

  return (
    <Layout>
      <SEO title="Contribute" />
      <ContributePage.Content>
        <ContributePage.LineNumber>line {lineNumber}</ContributePage.LineNumber>
        <ContributePage.LineText>
          ideas recur, although the ideas may be the same, we see them in different relationships
        </ContributePage.LineText>
        <ContributePage.Divider />
        <ContributePage.Form>
          <ContributePage.InputContainer>
            <ContributePage.Input
              input type="text"
              placeholder="Enter your contribution here" 
            />
            <ContributePage.Submit>
              <RightArrow />
            </ContributePage.Submit>
          </ContributePage.InputContainer>
          <ContributePage.InstructionalDetail>
            Restate line {lineNumber} in your own words.
          </ContributePage.InstructionalDetail>
        </ContributePage.Form>
      </ContributePage.Content>
    </Layout>
  );
};

ContributePage.Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  max-width: 75rem;
  margin: 0 auto;
`;

ContributePage.LineNumber = styled.p`
  font-size: 3rem;
  font-style: italic;
  font-weight: 300;
  margin-bottom: 1rem;
`;

ContributePage.LineText = styled.p`
  font-style: italic;
  font-size: 3rem;
  text-align: center;
  font-weight: 600;
`;

ContributePage.Divider = styled.hr`
  opacity: 0.5;
  width: 15rem;
  margin: 4rem 0;
`;

ContributePage.Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

ContributePage.InputContainer = styled.div`
  flex: 1;
  position: relative;
  border-bottom: 1px solid rgba(68, 68, 68, 0.5);
  padding-right: 4rem;
`;

ContributePage.Input = styled.input`
  width: 100%;
  font-size: 2.25rem;
  color: #444444;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 500;
  padding: 0.5rem 0 0.5rem 0.5rem;
  border: 0;
`;

ContributePage.Submit = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: 0;
  border: none;
  padding: 0;

  input[type="button"] {
    display: none;
  }

  svg {
    width: 2rem;
    fill: #444444;
  }
`;

ContributePage.InstructionalDetail = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-left: 0.5rem;
`;

export default ContributePage;
