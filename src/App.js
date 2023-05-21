// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./Pages/Home";
import ShowClients from "./Pages/ShowClients";
import ClientById from "./Pages/ClientById";
import NewPayment from "./Components/NewPayment";
import NewLoan from "./Components/NewLoan.js";
import NewClient from "./Pages/NewClient";
import ActiveLoans from "./Components/ActiveLoans";

// import FourOFour from "./Pages/FourOFour";



// import SnackEdit from "./Pages/SnackEdit";

// COMPONENTS
import NavBar from "./Components/NavBar";
// import About from "./Components/About";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/clients" element={<ShowClients />} />
               <Route path="/active" element={<ActiveLoans />} />
               <Route path="/clients/new" element ={<NewClient />} />
               <Route exact path="/clients/:clientId" element={<ClientById />} />
               <Route exact path="/clients/:clientId/loans" element={<NewLoan />} />
               <Route exact path="/clients/:clientId/loans/:loanId/payments" element={<NewPayment/>} />
            {/* 
           
           
            <Route path="/snacks/:snackId/edit" element={<SnackEdit />} />
            
            
            <Route path="*" element={<FourOFour />} />  */}
            
            
            
           
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
