import React from 'react';
import styled from 'styled-components';

const StyledFieldset = styled.fieldset`
  height: 38px;
  border-radius: 8px;
  border: 2px solid #E3E3E3;

  &:focus-within {
    border-color: #0086A8; 
  }
`;

const StyledLegend = styled.legend`
  color: #828282;
  font-family: 'SF UI Display normal';
  font-size: 12px;

  input:focus ~ & {
    color: #0086A8; 
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border: 0;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  margin-top: 3px;

  &:focus { 
    outline: none;
  }

`

const Input = ({ title, ...restProps }) => {

  return (
    <StyledFieldset>
      <StyledInput {...restProps} />
      <StyledLegend>{title}</StyledLegend>
    </StyledFieldset>
  );
}



export default Input;
