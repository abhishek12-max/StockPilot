import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  // Check authentication state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <p className="text-xl text-white">
          Loading...
        </p>
      </div>
    );
  }

  // User is not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // User is authenticated
  return children;
}

export default ProtectedRoute;