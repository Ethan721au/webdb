import React, { createContext, useContext, useState } from "react";

type ResetContextType = {
  reset: boolean;
  triggerReset: () => void;
};

const ResetContext = createContext<ResetContextType | undefined>(undefined);

export const ResetProvider = ({ children }: { children: React.ReactNode }) => {
  const [reset, setReset] = useState(false);

  const triggerReset = () => {
    setReset(!reset);
  };

  return (
    <ResetContext.Provider value={{ reset, triggerReset }}>
      {children}
    </ResetContext.Provider>
  );
};

export const useReset = () => {
  const context = useContext(ResetContext);
  if (!context) {
    throw new Error("error");
  }
  return context;
};
