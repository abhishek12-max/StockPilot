import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Support from "./pages/Support";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Forgetpassword from "./pages/Forgetpassword";
import Resetpassword from "./pages/Resetpassword";
import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";
import Orders from "./pages/Orders";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<Support/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/resetpassword" element={<Resetpassword/>}/>
      <Route path="/forgetpassword" element={<Forgetpassword/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/orders" element={<Orders />} />
          
    </Routes>
    
    
  );
}

export default App;