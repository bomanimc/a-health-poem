import React from "react";
import styled from 'styled-components';

const Credit = ({ name = null, location = null, lineNumber }) => {
  let credit = name ? name : 'an anonymous contributor';
  if (location && credit) credit += ` from ${location}`;

  return (
    <span>
      {`Line ${lineNumber || '~'}`} of a <Credit.Italics>A Health Poem</Credit.Italics>
      {credit ? <span>{` by ${credit}.`}</span> : '.'}
    </span>
  );
}

Credit.Italics = styled.span`
  font-style: italic;
`;

export default Credit;