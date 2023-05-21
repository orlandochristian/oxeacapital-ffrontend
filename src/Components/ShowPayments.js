import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Payment from "./Payment";
import { Link } from "react-router-dom";
// import NewLoan from "./NewLoan.js";





const API = process.env.REACT_APP_API_URL;

function ShowPayments(props) {
  const [payments, setPayments] = useState([]);
  let { clientId } = useParams();
const { activeloan } = props;
  

 
  useEffect(() => {
    axios.get(`${API}/clients/${clientId}/loans/${activeloan.loan_id}/payments`).then((response) => {
     
      setPayments(response.data);
    });
  }, [clientId,activeloan.loan_id]);

 

   let cuota = (( ((activeloan.totalamount * activeloan.interestrate)/100) + Number(activeloan.totalamount) ) / activeloan.numberofpayment).toFixed(2)
   let interestdue = ((activeloan.totalamount * activeloan.interestrate)/100) - (payments.map(x => Number(x.interestamount)).reduce((ac,cur)=> ac + cur,0))
//   console.log(10500 - payments.map(x => Number(x.interestamount)).reduce((ac,cur)=> ac + cur,0))
   return (
    <section className="Payments">
        <h2>Payments</h2>
     <table>
          <thead>
            <tr>
              <th> <Link to={`/clients/${clientId}/loans/${activeloan.loan_id}/payments`} ><button>Add New Payment</button> </Link> </th>
              {/* <th> <Link to="/" ><button>Roll Over</button> </Link> </th>
              <th> <Link to="/" ><button>Close Loan</button> </Link> </th> */}
               <th> <button>Roll Over</button> </th>
               <th> <button>Close Loan</button>  </th>
            
            </tr>
            <tr>
               <th>Loan Due: ${activeloan.amountdue}</th>
               <th>Interest Due: ${interestdue}</th>
               <th>Each Payment: ${cuota}</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => {
              return <Payment key={payment.payment_id} payment={payment} />;
            })}
          </tbody>
        </table>
       
    
    </section>
  );
}



export default ShowPayments;