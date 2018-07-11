import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import _ from 'lodash';

const MySelect = styled.select `
  width : 50%;
  height : 40px;
`

let Select = ({allCurrencies,addNewCurrency,visibleCurrencies}) => ( 

  <MySelect onChange={(e) => addNewCurrency(e.target.value)}>
      <option>Валюта</option>
      {_.without(Object.keys(allCurrencies),...visibleCurrencies)
        .map( currencyName => (
          <option
          key={currencyName} 
          val={currencyName}>
          {currencyName}
          </option>
      ))}
  </MySelect>
)

export default Select;

