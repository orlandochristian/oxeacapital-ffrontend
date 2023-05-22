import { Link } from "react-router-dom";
import  "../Style/NavBar.css"

import oxealogo from "../Img/oxeanegra.jpg"
import signin from "../Img/signin.jpeg"

export default function NavBar() {
  
   

  return (
    <header >
   
      <div  className="logo">
        <Link to="/" >
           <img src={oxealogo} alt="Oxea Capital" />  
     
        </Link>
        
     </div>  
      
      <nav className="respon">
         <ul>
            <li><a href="https://www.oxeacapital.com/en/" alt="oxea">www.OxeaCapital.com</a></li>
            <li><Link to="/clients">Clients</Link></li> 
            <li><Link to="/active">Active Loans</Link></li>    
            <li><Link to="/clients/new">New Client</Link></li>   
         </ul>
      </nav>
      <div  className="logo2">
         <Link to="/"> 
             <img src={signin} alt="SignIn" />

         </Link>
      </div>  
      {/* <div id="movil" className="toggle_btn"> <i   className="fa-solid fa-bars"></i></div>
  
   

      <div  id="dropd" className="dropdown_menu">
      <li><a href="https://www.oxeacapital.com/en/" alt="oxea">www.OxeaCapital.com</a></li>
            <li><Link to="/clients">Clients</Link></li> 
            <li><Link to="/active">Active Loans</Link></li>    
            <li><Link to="/clients/new">New Client</Link></li> 
            <li > <Link to="/"> SignIn </Link>  </li>

      </div> */}


    </header>

    
  );

}


