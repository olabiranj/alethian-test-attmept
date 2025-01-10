import { createContext, useContext } from "react";
import { doctorData } from "../utils/data";



const DoctorsContext = createContext(null)

// eslint-disable-next-line react-refresh/only-export-components
export const useDoctorsHook = () => useContext(DoctorsContext);

export function DoctorsProvider({ children }) {
  return (
    <DoctorsContext.Provider value={doctorData}>
      {children}
    </DoctorsContext.Provider>
  );
} 
