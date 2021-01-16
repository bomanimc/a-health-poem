import React from "react";
import styled from 'styled-components';

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexPage.Content>
      <IndexPage.Title>Restatement</IndexPage.Title>
      <IndexPage.Quote>
        “The repetition of words and concepts can change their implications, just
        as the physical act of repeating a word aloud can alter its meaning” – 
        Making Sense: Decoding Gertrude Stein
      </IndexPage.Quote>
      <IndexPage.ContributeButton type="button">Contribute</IndexPage.ContributeButton>
    </IndexPage.Content>
  </Layout>
);

IndexPage.Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  max-width: 75rem;
  margin: 0 auto;
`;

IndexPage.Title = styled.h1`
  font-size: 9rem;
  margin-top: 9rem;
  margin-bottom: 2rem;
  
`;

IndexPage.Quote = styled.h5`
  font-size: 2.25rem;
  text-align: center;
  font-weight: 300;
`;

IndexPage.ContributeButton = styled.button`
  border: 1px solid #444444;
  border-radius: 0.5rem;
  margin-top: 5rem;
  padding: 0 5rem;
  height: 4rem;
  background: none;
  font-size: 1.5rem;
  color: #444444;
  font-family: 'Cormorant Garamond';
`;

export default IndexPage;
