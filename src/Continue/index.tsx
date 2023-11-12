// Continue.tsx
import { useTopicsContext } from "../Context";

export const Continue = () => {
  const { selectedTopics, setContinueClicked } = useTopicsContext();
  const handleContinueClick = () => {
    document.getElementById("mapSection")?.scrollIntoView();
    setContinueClicked(true);
  };

  return (
    <section className="my-3">
      {selectedTopics.length >= 1 && (
        <>
          <p>If you are happy with your choices please: </p>
          <button
            type="button"
            className="btn btn-success large"
            onClick={handleContinueClick}
          >
            Continue
          </button>
        </>
      )}
    </section>
  );
};
