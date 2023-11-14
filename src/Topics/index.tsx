import React, { FC, useEffect, useState, useMemo, useContext } from "react";
import { useTopicsContext } from "../Context";
import { Button } from "../Button/";
import { useSelectedButton } from "../Context/buttonContext";

const Topics: FC = (): React.ReactElement => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedButton, setSelectedButton] = useSelectedButton();

  const customerTypeArray: string[] = useMemo(
    () => ["Purchase", "Remortgage", "Residential", "Buy to let"],
    []
  );

  const handleClick = (topic: string): void => {
    setSelectedButton(topic);
    setErrorMessage(null);
  };

  return (
    <div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <h1>{selectedButton}</h1>

      {customerTypeArray.map((topic: string) => (
        <Button
          key={topic}
          topic={topic}
          handleClick={handleClick}
          selected={selectedButton === topic}
        />
      ))}
    </div>
  );
};

export default Topics;
