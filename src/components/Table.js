import React from 'react';
import {connect} from 'react-redux';
import ListOfCurrencies from './ListOfCurrencies';
import {getCurrencies,addNewCurrency,deleteCurrency,loadingCurrencies} from '../actions/currenciesTableActions';
import moment from 'moment';
import _ from 'lodash';
import Select from './Select';
import InputDate from './InputDate';

const decorate = () => connect(
  state => ({
   visibleCurrencies : state.visibleCurrencies,
   allCurrencies : state.allCurrencies,
   initialState : state.initialState,
   fetching : state.fetching,
   date : state.date
  }),
 {getCurrencies,addNewCurrency,deleteCurrency})

class Table extends React.Component {
     
   componentDidMount() {
     this.props.getCurrencies('02.02.2017');
   }

    getCurrenciesForAnotherDay = (e) => {
    let dateFromInput = moment(e.target.value,'YYYY/MM/DD');
    let newFormatDateFromInput = dateFromInput.format('DD.MM.YYYY');
    let minDate = moment().add(-1399, 'days');
    let maxDate = moment().add(-10, 'days');
    
    newFormatDateFromInput.length === 10 && dateFromInput >= minDate && dateFromInput <= maxDate &&
    this.props.getCurrencies(newFormatDateFromInput)
    }
     
    render() { 
      const {visibleCurrencies,allCurrencies,fetching,date,deleteCurrency,addNewCurrency}= this.props;
       if(fetching) return <h2>Loading</h2>
       else return (
         <React.Fragment>
            <Select 
             visibleCurrencies={visibleCurrencies}
             allCurrencies={allCurrencies}
             fetching={fetching}
             addNewCurrency={addNewCurrency}
             visibleCurrencies={visibleCurrencies}/>

            <InputDate getCurrenciesForAnotherDay={this.getCurrenciesForAnotherDay}/>
             
            <ListOfCurrencies
             visibleCurrencies={visibleCurrencies}
             allCurrencies={allCurrencies}
             date={date}
             deleteCurrency={deleteCurrency}/>
         
          </React.Fragment>
        )
    }
}

export default decorate()(Table);
