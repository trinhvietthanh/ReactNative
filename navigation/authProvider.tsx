import React, {createContext, useState} from "react";
//@ts-ignore
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
}