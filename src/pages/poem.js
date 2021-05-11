import React, { useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';

import Layout from "../components/layout";
import SEO from "../components/seo";

const AffirmationPage = () => {
  useEffect(() => {
    axios.get('/.netlify/functions/contributions')
      .then(response => console.log(response.data));
  }, []);

  return (
    <Layout>
      <SEO title="Home" />
      <AffirmationPage.Content>
        <AffirmationPage.Title>Poem 1</AffirmationPage.Title>
        <AffirmationPage.Divider />
        <AffirmationPage.Lines>
          <AffirmationPage.Line>Repetition changes meaning</AffirmationPage.Line>
          <AffirmationPage.Line>The expression of an idea can be enriched by it’s repetition–allowing the listener to interpret it in a new way each time.</AffirmationPage.Line>
          <AffirmationPage.Line>Ideas recur, although the ideas may be the same, we see them in different relationships</AffirmationPage.Line>
          <AffirmationPage.Line>When repeated, the meaning of the statement can change</AffirmationPage.Line>
          <AffirmationPage.Line isOwnedContribution>Repetition changes meaning</AffirmationPage.Line>
        </AffirmationPage.Lines>
        <AffirmationPage.MetaDetail>
          A collective poem by 4 people. Inspired by the work of Gertrude Stein. 
        </AffirmationPage.MetaDetail>
      </AffirmationPage.Content>
    </Layout>
  );
};

AffirmationPage.Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  max-width: 75rem;
  margin: 0 auto;
`;

AffirmationPage.Title = styled.h3`
  font-size: 4rem;
  font-style: italic;
`;

AffirmationPage.Divider = styled.hr`
  width: 15rem;
  margin: 1.5rem 0 3rem 0;
  border: 0.5px solid #444444;
  opacity: 0.5;
`;

AffirmationPage.Lines = styled.div`
  font-style: italic;
  font-size: 2.25rem;
  text-align: center;
`;

AffirmationPage.Line = styled.p`
  margin-bottom: 2rem;
  font-weight: ${p => p.isOwnedContribution ? 'bold' : 'normal'};
`;

AffirmationPage.MetaDetail = styled.p`
  margin-top: 4rem;
  margin-bottom: 4rem;
  color: rgba(68, 68, 68, 0.5);
`;

export default AffirmationPage;
