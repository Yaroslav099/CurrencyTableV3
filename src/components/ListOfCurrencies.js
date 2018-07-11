import React from 'react'

const ListOfCurrencies = ({visibleCurrencies,allCurrencies,deleteCurrency,date}) =>{ 

return(    
   <table className="table table-hover">
    <thead>
     <tr>
      <th scope="col">ItemName</th>
      <th scope="col">Date</th>
      <th scope="col">Value</th>
      <th scope="col">Delete</th>
     </tr>
    </thead>
    <tbody>
    {visibleCurrencies.map( (currencyKey) =>{ 
      const item = allCurrencies[currencyKey]
        return (
         <tr key={item.currency}>
           <th scope="row">{item.currency}</th>
           <td>{date}</td>
           <td>{item.saleRateNB}</td>
           <td>{item.currency === 'USD' || item.currency === 'EUR'? 'Standart' :
             <button 
              onClick={()=> deleteCurrency(item.currency)} 
              className="btn btn-danger btn-sm">
              Delete
             </button>} 
           </td>
         </tr>   
        )
     })}
   </tbody>
  </table>
  )
}
export default ListOfCurrencies;