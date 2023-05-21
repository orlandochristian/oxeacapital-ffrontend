import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function NewLoan() {
    let { clientId } = useParams();
    let navigate = useNavigate();


    let [client, setClient] = useState({})
    useEffect(() => {
        axios
          .get(`${API}/clients/${clientId}`)
          .then((response) => {
            
            setClient(response.data);
    
          })
          .catch((e) => {
        
            console.warn("catch", e);
          });
      }, [clientId]);



  const addLoan = (newLoan) => {
    axios
      .post(`${API}/clients/${clientId}/loans`, newLoan)
      .then(
        () => {
          navigate(`/clients/${clientId}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [loan, setLoan] = useState({
    totalamount: "",
    interestrate: "",
    startdate: "",
    appfee:"",
    numberofpayment:"",
  });

  const handleTextChange = (event) => {
    setLoan({ ...loan, [event.target.id]: event.target.value });
  };

 

  const handleSubmit = (event) => {
    event.preventDefault();
    addLoan(loan);
  };
  return (
    <div className="NewLoan">

      <p>{client.first_name}  {client.last_name}</p>
 

      <form onSubmit={handleSubmit}>
        <label htmlFor="totalamount">Loan Total Amount:</label>
        <input
          id="totalamount"
          value={loan.totalamount}
          type="text"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="interestrate">Interest Rate %:</label>
        <input
          id="interestrate"
          type="text"
          value={loan.interestrate}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="startdate">Start Date:</label>
        <input
          id="startdate"
          type="text"
          name="startdate"
          value={loan.startdate}
          placeholder="YYYY-MM-DD"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="appfee">Application Fee $:</label>
        <input
          id="appfee"
          type="text"
          name="appfee"
          value={loan.appfee}
          onChange={handleTextChange}
         
          
        />

      <label htmlFor="numberofpayment">Number of Payments:</label>
        <input
          id="numberofpayment"
          type="text"
          name="numberofpayment"
          value={loan.numberofpayment}
          onChange={handleTextChange}
          req
          
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default NewLoan;