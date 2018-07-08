import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import _ from 'lodash';

const MySelect = styled.select `
  width : 50%;
  height : 40px;
`

let Select = ({allCurrencies,addNewCurrency,fetching}) => fetching? null : (
  <MySelect onChange={addNewCurrency}>
      {_.without(Object.keys(allCurrencies),'USD','EUR').map( currencyName => {
         return (
           <option key={currencyName} val={currencyName}>{currencyName}</option>
         )
      })}
  </MySelect>
)


export default Select;

