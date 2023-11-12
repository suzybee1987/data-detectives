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
  selectedTopics: string[];
  toggleTopic: (topic: string) => void;
  continueClicked: boolean;
  setContinueClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopicsContext = createContext<TopicsContextType | undefined>(undefined);

export const Context: FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [continueClicked, setContinueClicked] = useState<boolean>(false);

  const toggleTopic = useCallback(
    (topic: string): void => {
      // Check if the topic is already in the selectedTopics array
      const isTopicSelected = selectedTopics.includes(topic);

      // Check if adding the topic would exceed the limit (5 topics)
      if (!isTopicSelected && selectedTopics.length >= 5) {
        // Display an error message or take appropriate action
        console.error("Cannot add more than 5 topics");
        return;
      }

      // Toggle the topic based on its current state
      setSelectedTopics((prevSelected) =>
        isTopicSelected
          ? prevSelected.filter((selectedTopic) => selectedTopic !== topic)
          : [...prevSelected, topic]
      );
    },
    [selectedTopics]
  );

  const contextValue: TopicsContextType = useMemo(
    () => ({
      selectedTopics,
      toggleTopic,
      continueClicked,
      setContinueClicked, // Include setContinueClicked in the context
    }),
    [selectedTopics, toggleTopic, continueClicked]
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
