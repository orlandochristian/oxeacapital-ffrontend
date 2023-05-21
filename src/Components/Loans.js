import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


import ShowPayments from "./ShowPayments"




const API = process.env.REACT_APP_API_URL;

function Loans() {
  const [activeloan, setActiveLoans] = useState([]);
  const [viewPayment, toggleViewPayment] = useState(false);
  let { clientId } = useParams();
  

  const toggleViewPay = () => {
    toggleViewPayment(!viewPayment);
  };  

  useEffect(() => {
    axios.get(`${API}/clients/${clientId}/loans/active`).then((response) => {
     
      setActiveLoans(response.data);
    });
  }, [clientId]);

   

  return (
    <section className="Loans">
        <h2><b>Active Loan Section</b> </h2>
       {!activeloan.length ? 
            (<article className="loanpartes2" >
                <h3>Client have no Active Loan</h3>   
                <div>
                   <Link to={`/clients/${clientId}/loans/`} ><button>Create New Loan</button> </Link>
                </div>
               
               
            </article>)
            :
            (
            <article >
                <div className="loanpartes">
                   <h3>Start Date: {activeloan[0].startdate}</h3>
                   <h3>Total Amount: ${activeloan[0].totalamount}</h3> 
                   <h3>Amount Due: ${activeloan[0].amountdue}</h3> 
                </div>
               <div className="loanpartes">
                  <h3>Loan Interest Rate: {activeloan[0].interestrate}%</h3> 
                  <button onClick={toggleViewPay}>{viewPayment? ('Hide Payment') :('Show Payment') }</button>
                  <h3>Number of Payments: {activeloan[0].numberofpayment}</h3> 
               </div>
                
               
               {viewPayment ? (
                                <ShowPayments key={activeloan[0].loan_id} activeloan={activeloan[0]} />
                              ) :
                               (null)}
            </article>
               
            )}
    
    </section>
  );
}



export default Loans;