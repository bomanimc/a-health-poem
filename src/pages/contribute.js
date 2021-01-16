import React from "react";
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from "../components/layout";
import SEO from "../components/seo";

const ContributePage = () => (
  <Layout>
    <SEO title="Contribute" />
    <ContributePage.Content>
      <ContributePage.LineNumber>line 3</ContributePage.LineNumber>
      <ContributePage.LineText>
        ideas recur, although the ideas may be the same, we see them in different relationships
      </ContributePage.LineText>
      <ContributePage.Divider />
    </ContributePage.Content>
  </Layout>
);

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

export default ContributePage;
