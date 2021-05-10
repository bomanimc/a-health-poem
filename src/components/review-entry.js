import React from "react";
import styled from 'styled-components';

const ReviewEntry = ({ contribution, details, onBack, onCompleteStep }) => {
  const casedContribution = contribution[0].toLowerCase() + contribution.substring(1);
  const {name, location } = details;
  let credit = name ? name : null;
  if (location && credit) credit += ` from ${location}`;

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
          Line 3 of a <i>A Health Poem</i>
          {credit ? <span>{` by ${credit}.`}</span> : '.'}
        </ReviewEntry.Detail>
      </ReviewEntry.Contribution>
      <ReviewEntry.Submit onClick={onCompleteStep}>Submit</ReviewEntry.Submit>
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

ReviewEntry.Submit = styled.button`
  border: 1px solid #444444;
  border-radius: 0.5rem;
  padding: 0 5rem;
  height: 3rem;
  font-size: 1.5rem;
  color: #444444;
  font-family: 'Cormorant Garamond';
  display: flex;
  align-items: center;
  text-decoration: none;
  align-self: center;
  margin-top: 3rem;
  background: none;
  transition: background 0.5s;

  &:hover {
    background: #A0A0A0;
  }

  svg {
    width: 2rem;
    fill: #444444;
  }
`;

ReviewEntry.SubmissionWarning = styled.p`
  font-size: 1rem;
`;

export default ReviewEntry;
