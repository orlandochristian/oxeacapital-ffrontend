import { Link } from "react-router-dom";

function Client({ client }) {
  return (

    
        <Link to={`/clients/${client.client_id}`}>
        <article className="oneclient">
      
          <h2>{client.first_name}  {client.last_name}</h2>
          <h4>Cell Ph: {client.telefono}</h4>
        </article>
        </Link>
      
  );
}

export default Client;