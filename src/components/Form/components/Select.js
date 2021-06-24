import React from 'react';
import styled from 'styled-components';
import arrow from './img/select_arrow.png';


const StyledSelect = styled.select`
  -moz-appearance:none; /* Firefox */
  -webkit-appearance:none; /* Safari and Chrome */
  appearance:none;
  height: 50px;
  border-radius: 8px;
  border: 2px solid #E3E3E3;
  background-color: white;
  background: url(${arrow}) no-repeat right;
  background-position-x: calc(100% - 15px);
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  padding-left: 15px;
  margin: 0 2px;

  &:focus {
    outline: none;
    border-color: #0086A8; 
  }
`;


const Select = ({ title, ...restProps }) => (
  <StyledSelect {...restProps}>
    <option value="" disabled selected hidden>{title}</option>
    {restProps.children}
  </StyledSelect>
);


export default Select;