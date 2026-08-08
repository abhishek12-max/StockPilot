import { Routes, Route } from "react-router-dom";

// Public Pages
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Support from "./pages/Support";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Verifyotp from "./pages/Verifyotp";
import Forgetpassword from "./pages/Forgetpassword";
import Resetpassword from "./pages/Resetpassword";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import HowItWorks from "./pages/HowItWorks";

// Protected Pages
import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";
import Market from "./pages/Market";
import Orders from "./pages/Orders";
import Watchlist from "./pages/WatchList";
import Settings from "./pages/Settings";

// Authentication
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* ================= PUBLIC ROUTES ================= */}

      <Route path="/" element={<Home />} />

      <Route path="/how-it-works" element={<HowItWorks />} />

      <Route path="/pricing" element={<Pricing />} />

      <Route path="/support" element={<Support />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/verify-otp" element={<Verifyotp />} />

      <Route
        path="/forget-password"
        element={<Forgetpassword />}
      />

      <Route
        path="/reset-password"
        element={<Resetpassword />}
      />

      <Route
        path="/privacy"
        element={<PrivacyPolicy />}
      />

      <Route
        path="/terms"
        element={<TermsConditions />}
      />


      {/* ================= PROTECTED ROUTES ================= */}

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