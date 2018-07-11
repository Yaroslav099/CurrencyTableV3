import _ from 'lodash';

let getCurrencies = (date) => {
  return (dispatch) => {
    fetch(`https://api.privatbank.ua/p24api/exchange_rates?json&date=${date}`)
    .then(res => res.json())
    .then(data => dispatch({
      type : "GET_CURRENCIES",
      payload : data
    }))
  }
}

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

export {getCurrencies,deleteCurrency,addNewCurrency};