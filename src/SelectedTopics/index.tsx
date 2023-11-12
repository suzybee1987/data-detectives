import React, { useEffect } from "react";
import { useTopicsContext } from "../Context";

export const SelectedTopics = () => {
  const { selectedTopics, continueClicked } = useTopicsContext();
  useEffect(() => {
    if (continueClicked) {
      document.getElementById("selectedSection")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [continueClicked]);
  return (
    <>
      {selectedTopics.length > 0 && (
        <h3 className="my-3" id="selectedSection">
          You have selected: <br /> {selectedTopics.join(", ")}
        </h3>
      )}
    </>
  );
};
