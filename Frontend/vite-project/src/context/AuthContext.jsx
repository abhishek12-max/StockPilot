import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import api from "../api/api";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ===============================
  // Get Logged-in User
  // ===============================

  const getProfile = useCallback(async () => {
    try {
      const response = await api.get("/auth/profile");

      setUser(response.data.user);

      return response.data.user;
    } catch (error) {
      setUser(null);

      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // ===============================
  // Check Authentication on App Load
  // ===============================

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        getProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// ===============================
// Custom Auth Hook
// ===============================

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };