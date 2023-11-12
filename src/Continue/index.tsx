import { useTopicsContext } from "../Context";

export const Continue = () => {
  const { selectedTopics } = useTopicsContext();
  const handleScroll = () => {
    document.getElementById("mapSection")?.scrollIntoView();
  };
  return (
    <section className="my-3">
      <p>If you are happy with your choices please: </p>
      {selectedTopics.length >= 1 && (
        <button
          type="button"
          className="btn btn-success large"
          onClick={() => handleScroll()}
        >
          Continue
        </button>
      )}
    </section>
  );
};
