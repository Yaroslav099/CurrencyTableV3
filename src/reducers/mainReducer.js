import _ from 'lodash';
import moment from 'moment';

let changeFormatOfDate = (dateFromJson) => {
  let DD = dateFromJson.slice(0,2);
  let MM = dateFromJson.slice(3,5);
  let YYYY = dateFromJson.slice(6,10);
  let _Date = `${MM}-${DD}-${YYYY}`;
  return _Date
 }

const initialState = {
  visibleCurrencies : ['USD','EUR'],
  allCurrencies : {},
  date: '',
  fetching : true
}

const mainReducer = (state = initialState , action) => {

   switch(action.type) {
     case "GET_CURRENCIES" : {
       return {
          ...state,
          allCurrencies : _.keyBy(action.payload.exchangeRate,'currency'),
          date : changeFormatOfDate(action.payload.date),
          fetching : false
       }
     }

     case "ADD_NEW_CURRENCY" : {
       return {
         ...state,
         visibleCurrencies : [...state.visibleCurrencies,action.payload]
       }
     }

     case "DELETE_CURRENCY" : {
       return {
        ...state,
        visibleCurrencies : _.without(state.visibleCurrencies,action.payload)
       }
     }
 
     default : {
       return state
     }
    }
  }
   
  
export default mainReducer;