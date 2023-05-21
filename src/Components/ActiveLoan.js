import { Link } from "react-router-dom";

function ActiveLoan({ activeloan }) {
  return (

    
         <Link to={`/clients/${activeloan.client_id}`}>
           <article className="oneclient">
         
             <h3>{activeloan.first_name}  {activeloan.last_name}</h3>
             <h5>Start Date: {activeloan.startdate}</h5>
             <h5>Loan Amount Due: ${activeloan.amountdue}</h5>
         
          </article>

          </Link>
       
      
  );
}

export default ActiveLoan;