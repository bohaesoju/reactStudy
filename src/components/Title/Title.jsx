import React from 'react';
// import styled from 'styled-components';
import styled, {css} from 'styled-components';

const StyledTitle = styled.h1`
  font-size: 20px;
  color: ${props => props.color || 'blue'};
  font-weight: bold;
`;

const StyledTitle2 = styled.h1`
  ${props => props.type === 'mobile' ? css `
    font-size: 12px;
    color: red;
    font-weight: normal;
  ` : css `
    font-size: 20px; 
    color: blue;
    font-weight: bold;
  `
  }
`;

const Title = (props) => {
  return (
    // <StyledTitle color={props.color}>타이틀 스타일드 컴포넌트</StyledTitle>
    <StyledTitle2 type={props.type}>타이틀 스타일드 컴포넌트</StyledTitle2>
  );
};

export default Title;