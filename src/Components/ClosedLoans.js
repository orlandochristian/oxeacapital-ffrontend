import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ClosedLoan from "./ClosedLoan";
import "../Style/ClosedLoans.css"







const API = process.env.REACT_APP_API_URL;

function ClosedLoans() {
  const [closedloans, setClosedloans] = useState([]);

  let { clientId } = useParams();
  
  

  useEffect(() => {
    axios.get(`${API}/clients/${clientId}/loans/history`).then((response) => {
     
        setClosedloans(response.data);
    });
  }, [clientId]);

   

  return (
    <section className="Loans">
        <h2><b> Closed Loan Section</b> </h2>
       {!closedloans.length ? 
            (<article >
                <h3>Client have no Closed Loans</h3>   
                
               
               
            </article>)
            :
            (
                <article className="all-closedloans">
                 {closedloans.map ((clloan) => {
                    return <ClosedLoan key={clloan.loan_id} closedloan={clloan} />;
                  })}

                </article>
                  
               
            )}
    
    </section>
  );
}



export default ClosedLoans;