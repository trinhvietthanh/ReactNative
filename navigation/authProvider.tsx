import React, {createContext, useState} from "react";
//@ts-ignore
export const AuthContext = createContext();

export const AuthProvider = ({children}: any) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{
      user,
      setUser,
      login: async (username, password) => {
        try {
          await 
        } catch (e) {
          console.log(e)
        }
      }
    }}>
      {children}
    </AuthContext.Provider>
  )
}