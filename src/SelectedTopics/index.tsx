import { useTopicsContext } from "../Context";

export const SelectedTopics = () => {
  const { selectedTopics } = useTopicsContext();

  return (
    <>
      {selectedTopics.length > 0 && (
        <h3 className="my-3">
          You have selected: <br /> {selectedTopics.join(", ")}
        </h3>
      )}
    </>
  );
};
