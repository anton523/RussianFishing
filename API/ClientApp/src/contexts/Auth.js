import { createContext, useEffect, useState } from "react";
import { whoami } from "../utils/UserApi";

export const AuthContext = createContext(null);

export function AuthProvider(props) {
  const [authStatus, setAuthStatus] = useState(false);

  useEffect(() => {
    whoami().then(status => {
      setAuthStatus(status);
    });
  }, []);

  function login(value) {
    setAuthStatus(value);
  }

  function logout() {
    setAuthStatus(false);
  }

  const value = {
    authStatus,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      { props.children }
    </AuthContext.Provider>
  );
}