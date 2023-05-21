import axios from "axios";
import { useState, useEffect } from "react";
import ActiveLoan from "./ActiveLoan";
import "../Style/Clients.css"

const API = process.env.REACT_APP_API_URL;

function ActiveLoans() {
  const [activeloans, setActiveLoans] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/activeloans`)
      .then((response) => {
      
        setActiveLoans(response.data);

      })
      .catch((e) => {
    
        console.warn("catch", e);
      });
  }, []);

  let moneylended = activeloans.reduce((acc,e) => acc + Number(e.totalamount),0)
  let totalinterest = activeloans.reduce((acc,e) => acc + Number(((e.totalamount* e.interestrate)/100)),0)

  return (
   
      <section className="clients">
          <p>Acive Loans</p>
          <article>
             <h4>Total Money Lended: $ {moneylended}</h4>
             <h4>Total Interest : $ {totalinterest}</h4>
          </article>
          <article className="all-clients">
             
            {activeloans.map((active) => {
              return <ActiveLoan key={active.client_id} activeloan={active} />;
            })}
         </article>

      </section>
   
  );
}

export default ActiveLoans;