import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Date = styled.input `
    width : 50%;
    height : 40px;
`
let findOutMinAndMaxDate = (date) => {
    let MM = date.slice(0,2);
    let DD = date.slice(3,5);
    let YYYY = date.slice(6,10);
    let _minDate = `${YYYY}-${MM}-${DD}`;
    return _minDate
}

const DateFromInput = ({date,fetching}) =>fetching ? null: (
    <Date
    type='date'
    min={findOutMinAndMaxDate( moment().add(-1399, 'days').calendar())}
    max={findOutMinAndMaxDate( moment().add(-10, 'days').calendar())}
    className="form-control"
    placeholder="Date since 01.01.2014 till now"
    onChange={date}
    />
    )

export default DateFromInput;