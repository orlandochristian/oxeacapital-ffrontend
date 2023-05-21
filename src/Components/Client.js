import { Link } from "react-router-dom";

function Client({ client }) {
  return (

    
        <Link to={`/clients/${client.client_id}`}>
        <article className="oneclient">
      
          <h3>{client.first_name}  {client.last_name}</h3>
          <p>Cell Ph: {client.telefono}</p>
        </article>
        </Link>
      
  );
}

export default Client;