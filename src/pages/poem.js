import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';

import Layout from "../components/layout";
import SEO from "../components/seo";

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

              {contributions.map(contribution =>
                <Poem.Line key={contribution.contribution}>
                  {contribution.contribution}
                </Poem.Line>
              )}
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
`;

Poem.PoemContainer = styled.div`
  border: 1px solid #E0E0E0;
  padding: 1rem;
  overflow-y: scroll;
  box-shadow: 10px 5px 5px #E0E0E0;
  height: 100%;
  font-style: italic;
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

Poem.Line = styled.p`
  margin-bottom: 1rem;
  font-weight: ${p => p.isOwnedContribution ? 'bold' : 'normal'};
`;

Poem.MetaDetail = styled.p`
  margin-top: 4rem;
  margin-bottom: 4rem;
  color: rgba(68, 68, 68, 0.5);
`;

export default Poem;
