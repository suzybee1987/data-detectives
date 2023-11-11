import React, { createContext, useContext, ReactNode, FC } from "react";

interface TopicsContextType {
  selectedTopics: string[];
  toggleTopic: (topic: string) => void;
}

const TopicsContext = createContext<TopicsContextType | undefined>(undefined);

export const Context: FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedTopics, setSelectedTopics] = React.useState<string[]>([]);

  // Assuming your toggleTopic function looks like this
  const toggleTopic = (topic: string): void => {
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
  };

  return (
    <TopicsContext.Provider value={{ selectedTopics, toggleTopic }}>
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
