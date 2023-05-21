import axios from "axios";
import { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function NewPayment() {
  let navigate = useNavigate();
  let { clientId, loanId } = useParams();
  
 

  let [loan, setLoan] = useState({})
  useEffect(() => {
    axios
      .get(`${API}/clients/${clientId}/loans/${loanId}/`)
      .then((response) => {
        
        setLoan(response.data);

      })
      .catch((e) => {
    
        console.warn("catch", e);
      });
  }, [clientId,loanId]);
 
  let cuota = (( ((loan.totalamount * loan.interestrate)/100) + Number(loan.totalamount) ) / loan.numberofpayment).toFixed(2)
 const payment = {
        paymentamount: cuota,
        amountdue: loan.amountdue,
        interestrate: loan.interestrate,
        paymentdate: "",
 }
    const addPayment = (newPayment) => {
    axios
      .post(`${API}/clients/${clientId}/loans/${loanId}/payments`, newPayment)
      .then(
        () => {
          navigate(`/clients/${clientId}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [paymentdate, setPaymentdate] = useState("");
 

  const handleTextChange = (event) => {
    setPaymentdate( event.target.value );
   
  };

 

  const handleSubmit = (event) => {
    event.preventDefault();
    payment.paymentdate = paymentdate;

     addPayment(payment);
  };
  return (
    <div className="NewPayment">
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="paymentamount">Loan Due  :  </label>
        <label htmlFor="paymentamount"> $ {loan.amountdue} </label>

        <label htmlFor="paymentamount">Payment Amount  :  </label>
        <label htmlFor="paymentdate">Payment Date:</label> */}
     
    
       
        <label htmlFor="paymentdate">Payment Date:</label>
        <input
          id="paymentdate"
          type="text"
          name="paymentdate"
          value={paymentdate}
          placeholder="Payment Date"
          onChange={handleTextChange}
          required
        />
      

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default NewPayment;