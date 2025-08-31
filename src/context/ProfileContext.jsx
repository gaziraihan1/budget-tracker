// ProfileContext.js
import { createContext, useContext } from "react";
import useProfile from "../hooks/userInfo/useProfile";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const { profile, loading, error, refetch } = useProfile();
  return (
    <ProfileContext.Provider value={{ profile, loading, error, refetch }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => useContext(ProfileContext);
