import React, { createContext, useContext, useState } from "react";
const StateContext = createContext();
const initialState = {
  model: false,
};
export const ContextProvider = ({ children }) => {
  const [openModal, setopenModal] = useState(false);
  const [IsShareInspectionModal, SetIsShareInspectionModal] = useState(false);
  return (
    <StateContext.Provider
      value={{
        openModal,
        setopenModal,
        IsShareInspectionModal,
        SetIsShareInspectionModal,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
