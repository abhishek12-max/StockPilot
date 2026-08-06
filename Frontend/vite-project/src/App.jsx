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
import Market from "./pages/Market";
import Contact from "./pages/Contact";
import ProtectedRoute from "./components/ProtectedRoute";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";


function App() {
  return (
    <Routes>

      {/* Public Routes */}

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<Support />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify-otp" element={<Verifyotp />} />
      <Route path="/forget-password" element={<Forgetpassword />} />
      <Route path="/reset-password" element={<Resetpassword />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/privacy" element={<PrivacyPolicy />} />
     <Route path="/terms" element={<TermsConditions />} />
     
      {/* Protected Routes */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/portfolio"
        element={
          <ProtectedRoute>
            <Portfolio />
          </ProtectedRoute>
        }
      />

      <Route
        path="/market"
        element={
          <ProtectedRoute>
            <Market />
          </ProtectedRoute>
        }
      />

      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        }
      />

      <Route
        path="/watchlist"
        element={
          <ProtectedRoute>
            <Watchlist />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;