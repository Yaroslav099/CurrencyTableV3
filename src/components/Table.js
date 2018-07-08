import React from 'react';
import {connect} from 'react-redux';
import VisibleCurrencies from './VisibleCurrencies';
import {getCurrencies,addNewCurrency,deleteCurrency,changeDate} from '../actions/mapDispatchToProps';
import moment from 'moment';
import Select from './Select';
import Date from './Date';

const decorate = () => (
 state => ({
   visibleCurrencies : state.mainReducer['visibleCurrencies'],
   allCurrencies : state.mainReducer['allCurrencies'],
   initialState : state.mainReducer['initialState'],
   fetching : state.mainReducer['fetching'],
   date : state.mainReducer['date']

 })
)

class Table extends React.Component {
   
   componentDidMount() {
     this.props.getCurrencies();
   }
   
   addNewCurrency = (e) => {
    !this.props.initialState.includes(e.target.value) ? 
     this.props.addNewCurrency(e.target.value) :
     console.log('err')
   }

   date = (e) => {
    let dateFromInput = moment(e.target.value,'YYYY/MM/DD');
    let newDate = dateFromInput.format('DD.MM.YYYY');
    let minDate = moment().add(-1399, 'days');
    let maxDate = moment().add(-10, 'days');
  
    newDate.length === 10 && dateFromInput >= minDate && dateFromInput <= maxDate &&

    fetch(`https://api.privatbank.ua/p24api/exchange_rates?json&date=${newDate}`)
    .then(res => res.json())
    .then(data => this.props.changeDate(data));
   }
     
    render() {
      
      const {visibleCurrencies,allCurrencies,initialState,fetching,date,deleteCurrency}= this.props;
        return (
         <React.Fragment>
           <Select 
             visibleCurrencies={visibleCurrencies}
             allCurrencies={allCurrencies}
             fetching={fetching}
             initialState={initialState}
             addNewCurrency={this.addNewCurrency}
             />
           <Date 
             date={this.date}
             fetching ={fetching}
             />
           <VisibleCurrencies 
             visibleCurrencies={visibleCurrencies}
             allCurrencies={allCurrencies}
             initialState={initialState}
             fetching={fetching}
             date={date}
             deleteCurrency={deleteCurrency}/>
          </React.Fragment>
        )      
    }
}

export default connect(decorate(),{getCurrencies,addNewCurrency,deleteCurrency,changeDate})(Table);