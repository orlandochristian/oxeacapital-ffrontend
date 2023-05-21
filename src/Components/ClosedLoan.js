

function ClosedLoan({ closedloan }) {
  return (

    
        
        <article className="closedloan">
      
          <h4>Amount: ${closedloan.totalamount}  </h4>
          <h4>Start date {closedloan.startdate}</h4>
          <h4>End date{closedloan.closedate}</h4>
        </article>
       
      
  );
}

export default ClosedLoan;