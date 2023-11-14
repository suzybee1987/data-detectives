import { useState } from "react";

type Props = {
  topic: string;
  handleClick: (topic: string) => void;
  selected: boolean;
};

export const Button = ({ topic, handleClick, selected }: Props) => {
  const onClickFunctions = () => {};
  return (
    <button
      type="button"
      key={topic}
      className={`btn m-1 ${selected ? "btn-success" : "btn-outline-success"}`}
      onClick={() => handleClick(topic)}
    >
      {`${topic}`}
    </button>
  );
};
