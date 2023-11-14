import React, { createContext, useState, useContext, ReactNode } from "react";

// Create a context
const SelectedButtonContext = createContext<
  [string | null, (button: string | null) => void]
>([null, () => {}]);

type SelectedButtonProviderProps = {
  children: ReactNode;
};

// Create a provider component
export const SelectedButtonProvider = ({
  children,
}: SelectedButtonProviderProps) => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  return (
    <SelectedButtonContext.Provider value={[selectedButton, setSelectedButton]}>
      {children}
    </SelectedButtonContext.Provider>
  );
};

// Create a hook to use the context
export const useSelectedButton = () => {
  return useContext(SelectedButtonContext);
};
