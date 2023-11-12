import React, { FC, useEffect, useState, useMemo } from "react";
import { useTopicsContext } from "../Context";

const Topics: FC = (): React.ReactElement => {
  const { selectedTopics, toggleTopic } = useTopicsContext();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const topicsAvailable: string[] = useMemo(
    () => [
      "apple",
      "banana",
      "cactus",
      "dolphin",
      "elephant",
      "flamingo",
      "giraffe",
      "hurricane",
      "iguana",
      "jazz",
      "kiwi",
      "leopard",
    ],
    []
  );

  const handleClick = (topic: string): void => {
    const isTopicSelected = selectedTopics.includes(topic);

    if (!isTopicSelected && selectedTopics.length >= 5) {
      setErrorMessage("Cannot add more than 5 topics");
      return;
    }

    setErrorMessage(null);
    toggleTopic(topic);
  };

  useEffect(() => {
    topicsAvailable.forEach((topic: string) => {
      const button = document.getElementById(topic);
      if (button) {
        const isSelected = selectedTopics.includes(topic);
        if (isSelected) {
          button.classList.add("btn-success");
          button.classList.remove("btn-outline-success");
        } else {
          button.classList.add("btn-outline-success");
          button.classList.remove("btn-success");
        }
      }
    });

    // Additional actions can be performed here if needed
  }, [selectedTopics, topicsAvailable]);

  return (
    <div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {topicsAvailable.map((topic: string) => (
        <button
          type="button"
          className={`btn m-1 ${
            selectedTopics.includes(topic)
              ? "btn-success"
              : "btn-outline-success"
          }`}
          key={topic}
          onClick={() => handleClick(topic)}
          id={topic}
        >
          {topic}
        </button>
      ))}
    </div>
  );
};

export default Topics;
