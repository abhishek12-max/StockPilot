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
import Watchlist from "./pages/WatchList";
import Settings from "./pages/Settings";
import Verifyotp from "./pages/Verifyotp";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<Support/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/verify-otp" element={<Verifyotp/>}/>
      <Route path="/reset-password" element={<Resetpassword/>}/>
      <Route path="/forget-password" element={<Forgetpassword/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/watchlist" element={<Watchlist />} />
      <Route path="/settings" element={<Settings/>} />

          
    </Routes>
    
    
  );
}

export default App;