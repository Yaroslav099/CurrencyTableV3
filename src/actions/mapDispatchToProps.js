import _ from 'lodash';

let getCurrencies = () => {
  return (dispatch) => {
    dispatch(fetchStart());

    fetch('https://api.privatbank.ua/p24api/exchange_rates?json&date=02.03.2016')
    .then(res => res.json())
    .then(data => dispatch(fetchData(data))); 
  }
}

let fetchStart = () => ({
    type : 'FETCH_START',
    payload : true
})

let fetchData = (data) => ({
    type : "GET_CURRENCIES",
    payload : data
})

let addNewCurrency = (itemName) => ({
      type : 'ADD_NEW_CURRENCY',
      payload : itemName
})

let deleteCurrency = index => (
   dispatch => {
     dispatch({
       type : 'DELETE_CURRENCY',
       payload : index
     })
   }
)

let changeDate = json => (
  dispatch => {
    dispatch({
      type : 'CHANGE_DATE',
      payload : json
   })
 }
)

export {getCurrencies,deleteCurrency,addNewCurrency,changeDate};