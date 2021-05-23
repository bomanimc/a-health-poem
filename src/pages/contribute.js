import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';
import { navigate } from 'gatsby';

import Layout from "../components/layout";
import SEO from "../components/seo";
import NewEntry from "../components/new-entry";
import DetailsEntry from "../components/details-entry";
import ReviewEntry from "../components/review-entry";

const STEPS = {
  newEntry: 1,
  details: 2,
  review: 3,
};

const ContributePage = () => {
  const [step, setStep] = useState(STEPS.newEntry);
  const [contribution, setContribution] = useState('');
  const [details, setDetails] = useState({});
  const [nextLineNumber, setNextLineNumber] = useState(null);

  useEffect(() => {
    axios.get('/.netlify/functions/countContributions')
      .then(response => setNextLineNumber(response.data.count + 1));
  }, []);


  const onGoToDetailsStep = (contributionEntry) => {
    setContribution(contributionEntry);
    setStep(STEPS.details);
  }

  const onGoToNewEntryStep = (detailsEntry = null) => {
    if (detailsEntry) setDetails(detailsEntry);
    setStep(STEPS.newEntry);
  }

  const onGoToReviewEntryStep = (detailsEntry = null) => {
    if (detailsEntry) setDetails(detailsEntry);
    setStep(STEPS.review);
  }

  const onSubmitForm = async (detailsEntry) => {
    const { name, location } = detailsEntry;
    setDetails({ name, location });
    axios.post('/.netlify/functions/contribute', {
      contribution,
      name,
      location,
    });
    navigate('/poem');
  }

  return (
    <Layout>
      <SEO title="Contribute" />
      {
        step === STEPS.newEntry && (
          <NewEntry 
            contribution={contribution}
            lineNumber={nextLineNumber}
            onCompleteStep={onGoToDetailsStep}
          />
        )
      }
      {
        step === STEPS.details && (
          <DetailsEntry
            details={details}
            onCompleteStep={onGoToReviewEntryStep}
            onBack={onGoToNewEntryStep}
          />
        )
      }
      {
        step === STEPS.review && (
          <ReviewEntry
            contribution={contribution}
            details={details}
            lineNumber={nextLineNumber}
            onCompleteStep={onSubmitForm}
            onBack={onGoToNewEntryStep}
          />
        )
      }
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
  padding: 0 2rem;
`;

ContributePage.LineNumberDetail = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-left: 0.5rem;
`;

ContributePage.LineText = styled.p`
  font-style: italic;
  font-size: 3rem;
  text-align: center;
  font-weight: 600;
`;

ContributePage.Divider = styled.hr`
  width: 15rem;
  margin: 4rem 0;
  border: 0.5px solid #444444;
  opacity: 0.5;
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

ContributePage.Instruction = styled.p`
  font-size: 2rem;
  font-style: italic;
  font-weight: 300;
  margin-bottom: 1rem;
`;

export default ContributePage;
