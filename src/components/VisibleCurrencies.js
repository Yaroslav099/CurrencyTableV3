import React from 'react'

const VisibleCurrencies = ({visibleCurrencies,allCurrencies,deleteCurrency,date,fetching}) =>
    fetching ? <h2>loading...</h2> :(
   
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

    {visibleCurrencies.map( (item,index) =>{ 
        return (
         <tr key={item.saleRateNB}>
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

export default VisibleCurrencies;