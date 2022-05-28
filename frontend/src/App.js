// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import useAuth from "./hooks/useAuth";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Pages Imports
import DepHomePage from "./pages/DepHomePage/DepHomePage";
import DpcHomePage from "./pages/DpcHomePage/DpcHomePage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import DepRegisterPage from "./pages/DepRegisterPage/DepRegisterPage";
import DpcRegisterPage from "./pages/DpcRegisterPage/DpcRegisterPage";
import LocationPage from "./pages/LocationPage/LocationPage";
import DpcReqPage from "./pages/DpcReqPage/DpcReqPage"
import DpcDepPage from "./pages/DpcDepPage/DpcDepPage"


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
        <Route path="/dep/" element={<PrivateRoute><DepHomePage /></PrivateRoute>}/>
        <Route path="/dpc" element={<PrivateRoute><DpcHomePage /></PrivateRoute>}/>
        <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>}/>
        <Route path="/dpc/loc/:locationId" element={<PrivateRoute><LocationPage /></PrivateRoute>} />
        <Route path="/dpc/register" element={<PrivateRoute><DpcRegisterPage /></PrivateRoute>} />
        <Route path="/dpc/req" element={<PrivateRoute><DpcReqPage /></PrivateRoute>} />
        <Route path="/dpc/dep" element={<PrivateRoute><DpcDepPage /></PrivateRoute>} />
        <Route path="/dep/register" element={<PrivateRoute><DepRegisterPage /></PrivateRoute>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
