// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./Pages/Home";
import ShowClients from "./Pages/ShowClients";
import ClientById from "./Pages/ClientById";



// import EditAlbum from "./Pages/EditSnack";
// import FourOFour from "./Pages/FourOFour";

// import NewSnack from "./Pages/NewSnack";

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
               <Route exact path="/clients/:clientId" element={<ClientById />} />
            {/* 
           
            <Route path="/snacks/new" element={<NewSnack />} />
            <Route path="/snacks/:snackId/edit" element={<SnackEdit />} />
            
            <Route path="/about" element ={<About />} />
            <Route path="*" element={<FourOFour />} />  */}
            
            
            
           
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
