import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../Style/newClient.css"

const API = process.env.REACT_APP_API_URL;

function AddClient() {
  let navigate = useNavigate();

  const addClient = (newClient) => {
    axios
      .post(`${API}/clients`, newClient)
      .then(
        () => {
          navigate(`/clients`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [client, setClient] = useState({
    firstname: "",
    lastname: "",
    direccion: "",
    telefono: "",
    email: "",
    ss: "",
    dob: "",
    lic_number:"",
  });

  const handleTextChange = (event) => {
    setClient({ ...client, [event.target.id]: event.target.value });
  };

 

  const handleSubmit = (event) => {
    event.preventDefault();
    addClient(client);
  };
  return (
    <div className="Newclients">
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name:</label>
        <input
          id="firstname"
          name="firstname"
          value={client.firstname}
          type="text"
          onChange={handleTextChange}
          placeholder="client first name"
          required
        />
        <label htmlFor="lastname">Last Name:</label>
        <input
          id="lastname"
          type="text"
          name="lastname"
          required
          value={client.lastname}
          placeholder="client last name"
          onChange={handleTextChange}
        />
        <label htmlFor="direccion">Client Address:</label>
        <input
          id="direccion"
          type="text"
          name="direccion"
          value={client.direccion}
          placeholder="client address"
          onChange={handleTextChange}
        />

       <label htmlFor="telefono">Client Cell Ph.:</label>
        <input
          id="telefono"
          type="text"
          name="telefono"
          value={client.telefono}
          placeholder="client cell ph. number"
          onChange={handleTextChange}
        />

       <label htmlFor="email">Client Email:</label>
        <input
          id="email"
          type="text"
          name="email"
          value={client.email}
          placeholder="client email"
          onChange={handleTextChange}
        />

      <label htmlFor="ss">Client Social Security:</label>
        <input
          id="ss"
          type="text"
          name="ss"
          value={client.ss}
          placeholder="client SS"
          onChange={handleTextChange}
        />

      <label htmlFor="dob">Client Date of Birth:</label>
        <input
          id="dob"
          type="text"
          name="dob"
          value={client.dob}
          placeholder="YYYY-MM-DD"
          onChange={handleTextChange}
        />

       <label htmlFor="lic_number">Client Driver Lic.:</label>
        <input
          id="lic_number"
          type="text"
          name="lic_number"
          value={client.lic_number}
          placeholder="Driver Lic Number"
          onChange={handleTextChange}
        />


       

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default AddClient;