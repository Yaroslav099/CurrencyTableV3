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
  initialState : ['USD','EUR'],
  allCurrencies :[],
  visibleCurrencies :[],
  date: '',
  fetching : false 
}

const mainReducer = (state = initialState , action) => {

   switch(action.type) {
     case "FETCH_START" : {
       return{
        ...state,
        fetching : true
       }
     }

     case "GET_CURRENCIES" : {
       return {
          initialState : state['initialState'],
          allCurrencies : _.keyBy(action.payload.exchangeRate,'currency'),
          visibleCurrencies : state['initialState'].map( el => _.keyBy(action.payload.exchangeRate,'currency')[el]),
          date : changeFormatOfDate(action.payload.date),
          fetching : false
       }
     }

     case "ADD_NEW_CURRENCY" : {
       return {
         ...state,
         initialState : [...state['initialState'],action.payload],
         visibleCurrencies : [...state['initialState'],action.payload].map( el => state['allCurrencies'][el])
       }
     }

     case "DELETE_CURRENCY" : {
       return {
        ...state,
        initialState : _.without(state['initialState'],action.payload),
        visibleCurrencies : _.without(state['initialState'],action.payload).map( el => state['allCurrencies'][el])

       }
     }

     case 'CHANGE_DATE' : {
      return  {
        initialState : state['initialState'],
        allCurrencies : _.keyBy(action.payload.exchangeRate,'currency'),
        visibleCurrencies : state['initialState'].map( el => _.keyBy(action.payload.exchangeRate,'currency')[el]),
        date : changeFormatOfDate(action.payload.date)
      }
    }
     default : {
       return state
     }
    }
  }
   
  
export default mainReducer;