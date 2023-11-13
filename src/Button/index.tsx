import { useState } from "react";

type Props = {
  topic: string;
  handleClick: (topic: string) => void;
  selectedTopics: number;
};

export const Button = ({ topic, handleClick, selectedTopics }: Props) => {
  const [selected, setSelected] = useState(false);
  const onClickFunctions = () => {
    selectedTopics !== 5 ? setSelected(!selected) : setSelected(false);
    handleClick(topic);
  };
  return (
    <button
      type="button"
      key={topic}
      className={`btn m-1 ${selected ? "btn-success" : "btn-outline-success"}`}
      onClick={() => onClickFunctions()}
    >
      {`${topic}`}
    </button>
  );
};
