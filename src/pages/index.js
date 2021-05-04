import React from "react";
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexPage.Content>
      <IndexPage.Title>A Health Poem</IndexPage.Title>
      <IndexPage.Subtitle>
        A collaborative poem exploring the meaning of health, in your own words. 
      </IndexPage.Subtitle>
      <IndexPage.ContributeLink to="/contribute">Contribute</IndexPage.ContributeLink>
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

  @media (max-width: 896px) {
    margin: 0 1rem;
  }
`;

IndexPage.Title = styled.h1`
  font-size: 9rem;
  margin-top: 9rem;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 896px) {
    font-size: 6rem;
    margin-top: 3rem;
  }
`;

IndexPage.Subtitle = styled.h5`
  font-size: 2.25rem;
  text-align: center;
  font-weight: 300;

  @media (max-width: 896px) {
    font-size: 1.5rem;
  }
`;

IndexPage.ContributeLink = styled(Link)`
  border: 1px solid #444444;
  border-radius: 0.5rem;
  margin-top: 5rem;
  padding: 0 5rem;
  height: 3rem;
  font-size: 1.5rem;
  color: #444444;
  font-family: 'Cormorant Garamond';
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export default IndexPage;
