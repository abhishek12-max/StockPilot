import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PublicRoute({ children }) {
  const { user, loading } = useAuth();

  // Auth check chal raha hai
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <p className="text-xl text-white">
          Loading...
        </p>
      </div>
    );
  }

  // Already logged in
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  // Not logged in
  return children;
}

export default PublicRoute;