import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';

import Layout from "../components/layout";
import SEO from "../components/seo";
import Credit from "../components/credit";

const Poem = () => {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    axios.get('/.netlify/functions/contributions')
      .then(response => setContributions(response.data.contributions));
  }, []);

  return (
    <Layout>
      <SEO title="Home" />
      <Poem.Content>
        <Poem.ContentContainer>
          <Poem.PoemContainer>
            <Poem.Title>A Health Poem</Poem.Title>
            <Poem.Subtitle>A collaborative poem exploring the meaning of health.</Poem.Subtitle>
            <Poem.Lines>
              {contributions.map((contribution, index) => {
                const {contribution: contributionText, name, location } = contribution;

                return (
                  <Poem.Line key={contribution.contribution}>
                    <p>{`Health is ${contributionText[0].toLowerCase() + contributionText.substring(1)}`}</p>
                    <Poem.CreditsContainter>
                      <Credit name={name} location={location} lineNumber={index + 1} />
                    </Poem.CreditsContainter>
                  </Poem.Line>
                );
              })}
            </Poem.Lines>
          </Poem.PoemContainer>
        </Poem.ContentContainer>
      </Poem.Content>
    </Layout>
  );
};

Poem.Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 80vh;
  padding: 2rem;
`;

Poem.ContentContainer = styled.div`
  max-width: 50rem;
  margin: 2rem auto;
  height: 100%;
  width: 100%;
  position: relative;
`;

Poem.CreditsContainter = styled.div`
  display: none;
  width: 15rem;
  position: absolute;
  right: -2rem;
  transform: translateX(100%);
  font-size: 1rem;
`;

Poem.PoemContainer = styled.div`
  border: 1px solid #E0E0E0;
  padding: 1rem;
  overflow-y: scroll;
  box-shadow: 10px 5px 5px #E0E0E0;
  height: 100%;
`;

Poem.Title = styled.h3`
  font-size: 4rem;
`;

Poem.Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem; 
`;

Poem.Divider = styled.hr`
  width: 15rem;
  margin: 1.5rem 0 3rem 0;
  border: 0.5px solid #444444;
  opacity: 0.5;
`;

Poem.Lines = styled.div`
  font-style: italic;
  font-size: 1.5rem;
`;

Poem.Line = styled.div`
  display: flex;

  p {
    margin-bottom: 1rem;
    font-weight: ${p => p.isOwnedContribution ? 'bold' : 'normal'};
  }

  &:hover {
    text-decoration: underline;
    text-decoration-style: dotted;
  }

  &:hover ${Poem.CreditsContainter} {
    display: block;
  }
`;

Poem.MetaDetail = styled.p`
  margin-top: 4rem;
  margin-bottom: 4rem;
  color: rgba(68, 68, 68, 0.5);
`;

export default Poem;
