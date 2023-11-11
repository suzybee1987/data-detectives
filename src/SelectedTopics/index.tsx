import React, { createContext, useContext, ReactNode, FC } from "react";
import { useTopicsContext } from "../Context";

export const SelectedTopics = () => {
  const { selectedTopics, toggleTopic } = useTopicsContext();

  return <h3>You have selected: {selectedTopics.join(", ")}</h3>;
};
