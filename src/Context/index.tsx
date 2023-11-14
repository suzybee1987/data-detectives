import {
  createContext,
  useContext,
  ReactNode,
  FC,
  useState,
  useMemo,
  useCallback,
} from "react";

interface TopicsContextType {
  selectedCustomerType: string;
  toggleCustomer: (topic: string) => void;
}

const TopicsContext = createContext<TopicsContextType | undefined>(undefined);

export const Context: FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCustomerType, setSelectedCustomerType] = useState<string>("");

  const toggleCustomer = useCallback(
    (customerType: string): void => {
      // Check if the topic is already in the selectedCustomerType array
      // const isCustomerTypeSelected =
      //   selectedCustomerType.includes(customerType);

      // Toggle the topic based on its current state
      setSelectedCustomerType(customerType);
    },
    [selectedCustomerType]
  );

  const contextValue: TopicsContextType = useMemo(
    () => ({
      selectedCustomerType,
      toggleCustomer,
    }),
    [selectedCustomerType, toggleCustomer]
  );

  return (
    <TopicsContext.Provider value={contextValue}>
      {children}
    </TopicsContext.Provider>
  );
};

export const useTopicsContext = (): TopicsContextType => {
  const context = useContext(TopicsContext);
  if (!context) {
    throw new Error("useTopicsContext must be used within a TopicsProvider");
  }
  return context;
};
