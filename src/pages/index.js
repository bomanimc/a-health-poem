import React from "react";
import styled from 'styled-components';
import { navigate } from 'gatsby';
import Button from "../components/button";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => {
  const onClickContribute = () => {
    navigate('/contribute');
  }

  return (
    <Layout>
      <SEO title="Home" />
      <IndexPage.Content>
        <IndexPage.Title>A Health Poem</IndexPage.Title>
        <IndexPage.Subtitle>
          A collaborative poem exploring the meaning of health, in your own words. 
        </IndexPage.Subtitle>
        <IndexPage.ContributeCTA onClick={onClickContribute}>
          Contribute
        </IndexPage.ContributeCTA >
      </IndexPage.Content>
    </Layout>
  );
};

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

IndexPage.ContributeCTA = styled(Button)`
  margin-top: 5rem;
`;

export default IndexPage;
