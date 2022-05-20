// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

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

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/"element={<PrivateRoute><DepHomePage /></PrivateRoute>}/>
        <Route path="/"element={<PrivateRoute><DpcHomePage /></PrivateRoute>}/>
        <Route path="/"element={<PrivateRoute><HomePage /></PrivateRoute>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dpc/register" element={<PrivateRoute><DpcRegisterPage /></PrivateRoute>} />
        <Route path="/dep/register" element={<PrivateRoute><DepRegisterPage /></PrivateRoute>} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
