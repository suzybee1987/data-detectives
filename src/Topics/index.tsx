import React, { FC, useEffect, useState, useMemo } from "react";
import { useTopicsContext } from "../Context";
import { Button } from "../Button/";

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

  return (
    <div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      {topicsAvailable.map((topic: string) => (
        <Button
          key={topic}
          topic={topic}
          handleClick={handleClick}
          selectedTopics={selectedTopics.length}
        />
      ))}
    </div>
  );
};

export default Topics;
