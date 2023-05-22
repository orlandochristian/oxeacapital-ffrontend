import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link} from "react-router-dom";
import axios from "axios";
import "../Style/ClientLoan.css"
import Loans from "./Loans"
import ClosedLoans from  "./ClosedLoans"


const API = process.env.REACT_APP_API_URL
 
function ClientLoans() {
  const [client, setClient] = useState({});
 
  const { clientId } = useParams();
//   const navigate = useNavigate();




  useEffect(() => {
    axios.get(`${API}/clients/${clientId}`)
    .then((response) => {
      
         setClient(response.data)
      
    }).catch((e) => {
   
      console.warn("catch:", e)
    })
  }, [clientId]);

//   const deleteSnack = () => {
//     axios
//       .delete(`${API}/snacks/${snackId}`)
//       .then(() => {
//         navigate(`/snacks`);
//       })
//       .catch((e) => {
//         console.warn("catch:", e);
//       });
//   };


//   const handleDelete = () => {
//     if (window.confirm("Are you sure you want to delete?")) {
//         // deleteSnack();
//   }}



return (
  <article className="article-detail" >

   <div className="clientloan"> 
    <h1>{client.first_name}  {client.last_name}</h1>


    <div className="clientdatos">
         <h3>Address: {client.direccion}  </h3>
         <h3>Ph: {client.telefono} </h3>
         <h3>Email: {client.email} </h3>
         
    </div>
    <div className="clientdatos">
        <h3>Social Sec.: {client.ss} </h3>
         <h3>DoB: {client.dob} </h3>
         <h3>DMV Lic: {client.lic_number} </h3>
    </div>
   


    <div className="clientdatos">
        <div >
          <Link to={`/clients`}>
            <button className="bton">Back</button>
          </Link>
        </div>
        <div  >
          <Link to={`/clients/${client.client_id}/edit`}>
            <button  className="bton">Edit</button>
          </Link>
        </div>
        {/* <div>
          <button onClick={handleDelete}>Delete</button>
        </div> */}
      </div>
      
    </div>
    < Loans />
    < ClosedLoans />
  </article>
); 
}

export default ClientLoans;