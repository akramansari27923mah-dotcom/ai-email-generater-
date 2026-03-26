/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/set-state-in-effect */
import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user')

    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [loader])

  return (
    <AuthContext.Provider value={{ user, setUser, loader, setLoader }}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
export const useAuthCon = () => useContext(AuthContext);