import React from "react";
import styled from 'styled-components';
import Button from "./button";
import Credit from "./credit";

const ReviewEntry = ({ contribution, details, lineNumber, onBack, onCompleteStep }) => {
  const casedContribution = contribution[0].toLowerCase() + contribution.substring(1);
  const {name, location } = details;

  return (
    <ReviewEntry.Content>
      <ReviewEntry.Instruction>Review your contribution.</ReviewEntry.Instruction>
      <ReviewEntry.SubmissionWarning>
        Note: By submitting this form, you consent to allowing your contribution
        to this collaborative poem to be shared with others.
      </ReviewEntry.SubmissionWarning>
      <ReviewEntry.Contribution>
        <ReviewEntry.LineText>{`Health is `}
          <ReviewEntry.ContributedLineText onClick={onBack}>{casedContribution}</ReviewEntry.ContributedLineText>
        </ReviewEntry.LineText>
        <ReviewEntry.Detail>
          <Credit name={name} location={location} lineNumber={lineNumber} />
        </ReviewEntry.Detail>
      </ReviewEntry.Contribution>
      <ReviewEntry.SubmitContainer>
        <Button onClick={onCompleteStep}>Submit</Button>
      </ReviewEntry.SubmitContainer>
    </ReviewEntry.Content>
  );
};  

ReviewEntry.Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

ReviewEntry.LineText = styled.p`
  font-style: italic;
  font-size: 3rem;
  text-align: center;
  font-weight: 600;
  margin: 3rem 0;
`;

ReviewEntry.ContributedLineText = styled.a`
  color: #444444;
  text-decoration: underline;
  text-decoration-style: dotted;
  cursor: pointer;
  
  &:hover {
    text-decoration-style: solid;
  }
`;

ReviewEntry.Detail = styled.p`
  font-size: 1.5rem;
`;

ReviewEntry.Contribution = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4rem 0rem;
`;

ReviewEntry.Instruction = styled.p`
  font-size: 2rem;
  font-style: italic;
  font-weight: 300;
  margin-bottom: 1rem;
`;

ReviewEntry.SubmissionWarning = styled.p`
  font-size: 1rem;
  text-align: center;
`;

ReviewEntry.SubmitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 896px) {
    align-items: stretch;
  }
`;

ReviewEntry.Italics = styled.span`
  font-style: italic;
`;

export default ReviewEntry;
