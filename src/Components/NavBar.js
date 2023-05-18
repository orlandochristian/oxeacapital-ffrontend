import { Link } from "react-router-dom";
import  "../Style/NavBar.css"

import oxealogo from "../Img/oxeanegra.jpg"

export default function NavBar() {
  return (
    <header className="logo">
      <Link to="/" >
      <img src={oxealogo} alt="Oxea Capital" />  
      </Link>
     

      <nav>
         <ul>
           <li><Link to="/clients">Clients</Link></li> 
          

           {/* <li><Link to="/Activeloans">Active Loans</Link></li> */}
           <li><Link to="/">Active Loans</Link></li>
     
            {/* <li><Link to="/clients/new">New Client</Link></li> */}
            <li><Link to="/">New Client</Link></li>
     
           
        </ul>
      </nav>
       
    </header>
  );
}