import React, { FC, useState } from "react";

export const Topics: FC = (): React.ReactElement => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const handleClick = (topic: string): void => {
    setSelectedTopics((prevSelected) =>
      prevSelected.includes(topic)
        ? prevSelected.filter((selectedTopic) => selectedTopic !== topic)
        : [...prevSelected, topic]
    );
  };

  // Change this when we get azure access data lake
  const topicsAvailable: string[] = ["apple", "banana", "cactus", "dolphin"];

  return (
    <div>
      {topicsAvailable.map((topic: string) => {
        const isSelected = selectedTopics.includes(topic);

        return (
          <button
            type="button"
            className={`btn ${
              isSelected ? "btn-success" : "btn-outline-success"
            } m-1`}
            key={topic}
            onClick={() => handleClick(topic)}
          >
            {topic}
          </button>
        );
      })}
    </div>
  );
};
