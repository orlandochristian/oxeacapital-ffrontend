import axios from "axios";
import { useState, useEffect } from "react";
import Client from "./Client";
import "../Style/Clients.css"

const API = process.env.REACT_APP_API_URL;

function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/clients`)
      .then((response) => {
       
        setClients(response.data);

      })
      .catch((e) => {
    
        console.warn("catch", e);
      });
  }, []);

  return (
   
      <section className="clients">
          <h1>Clients</h1>
          <article className="all-clients">
             
            {clients.map((client) => {
              return <Client key={client.client_id} client={client} />;
            })}
         </article>
      </section>
   
  );
}

export default Clients;