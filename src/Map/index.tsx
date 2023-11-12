import { useTopicsContext } from "../Context";

export const Map = () => {
  const { continueClicked } = useTopicsContext();

  return (
    <>
      {continueClicked && (
        <section>
          <p id="mapSection">We think you would like these properties: </p>
          <img src="/LeedsMap.png" alt="A map of houses in Leeds" />
        </section>
      )}
    </>
  );
};
