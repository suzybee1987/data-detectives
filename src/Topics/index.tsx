import React, { FC, useEffect, useState } from "react";
import { useTopicsContext } from "../Context";

const Topics: FC = (): React.ReactElement => {
  const { selectedTopics, toggleTopic } = useTopicsContext();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleClick = (topic: string): void => {
    // Check if the topic is already in the selectedTopics array
    const isTopicSelected = selectedTopics.includes(topic);

    // Check if adding the topic would exceed the limit (5 topics)
    if (!isTopicSelected && selectedTopics.length >= 5) {
      // Set the error message
      setErrorMessage("Cannot add more than 5 topics");
      return;
    }

    // Clear the error message
    setErrorMessage(null);

    // Toggle the topic based on its current state
    toggleTopic(topic);
  };

  const topicsAvailable: string[] = [
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
    "mango",
    "notebook",
    "ocean",
    "parrot",
    "quasar",
    "rhythm",
    "sunflower",
    "tangerine",
    "breeze",
    "carousel",
    "dinosaur",
    "eclipse",
    "fantasy",
    "gondola",
    "harmony",
    "illusion",
    "jubilee",
    "kaleidoscope",
    "lagoon",
    "marvel",
    "nirvana",
    "octopus",
    "puzzle",
    "quixotic",
    "reverie",
    "serendipity",
    "triumph",
    "umbrella",
  ];

  useEffect(() => {
    // This effect is triggered whenever selectedTopics changes

    // Loop through topicsAvailable and update classNames
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
  }, [selectedTopics]);

  return (
    <div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {topicsAvailable.map((topic: string) => (
        <button
          type="button"
          className={`btn m-1 btn-outline-success`}
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
