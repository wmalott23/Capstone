// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import useAuth from "./hooks/useAuth";

// Pages Imports
import DepHomePage from "./pages/DepHomePage/DepHomePage";
import DpcHomePage from "./pages/DpcHomePage/DpcHomePage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import DepRegisterPage from "./pages/DepRegisterPage/DepRegisterPage";
import DpcRegisterPage from "./pages/DpcRegisterPage/DpcRegisterPage";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useReducer } from "react";

function App() {

  const [user, token] = useAuth();

  return (
    <div>
      <Navbar />
      <Routes>
        {console.log(user.is_deployer)}
        {console.log(user.is_dpc)} 
        {user.is_deployer ? <Route path="/" element={<PrivateRoute><DepHomePage /></PrivateRoute>}/> : null}
        {user.is_dpc ? <Route path="/" element={<PrivateRoute><DpcHomePage /></PrivateRoute>}/> : null}
        <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>}/>
        {user.is_dpc ? <Route path="/dpc/loc" element={<PrivateRoute><DpcRegisterPage /></PrivateRoute>} /> : null}
        {user.is_dpc ? <Route path="/dpc/register" element={<PrivateRoute><DpcRegisterPage /></PrivateRoute>} /> : null}
        {user.is_dpc ? <Route path="/dpc/dep/details" element={<PrivateRoute><DpcRegisterPage /></PrivateRoute>} /> : null}
        {user.is_dpc ? <Route path="/dpc/dep" element={<PrivateRoute><DpcRegisterPage /></PrivateRoute>} /> : null}
        {user.is_dpc ? <Route path="/dep/register" element={<PrivateRoute><DepRegisterPage /></PrivateRoute>} /> : null}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
