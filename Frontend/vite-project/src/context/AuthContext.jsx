import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/api";

const AuthContext = createContext();

function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getProfile() {

  try {

    console.log("GET PROFILE CALLED");

    const response = await api.get("/auth/profile");

    setUser(response.data.user);

  } catch (error) {

    console.log("PROFILE ERROR:", error.response?.data);

    // Agar login page par unauthorized hai to bas user null rakho.
    if (error.response?.status === 401) {
      setUser(null);
      return;
    }

    setUser(null);

  } finally {

    setLoading(false);

  }

}

  useEffect(() => {
    getProfile();
  }, []);

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

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };