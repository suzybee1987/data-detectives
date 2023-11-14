import { useTopicsContext } from "../Context";
type StatusType = "red" | "amber" | "green";
export const Result = () => {
  // const { continueClicked } = useTopicsContext();

  // get this value from the context? then uncomment below
  const result: StatusType = "green";
  return (
    <>
      {/* {continueClicked && ( */}{" "}
      <section id="resultSection">
        {result === "green" && (
          <p>
            This property is green - we think it's a gorgeous option for your
            next home!
          </p>
        )}
        {/* {result === "amber" && (
            <p>
              This property has an amber rating - we think it's a good option
              but some work needed to make it a sustainable option
            </p>
          )}
          {result === "red" && (
            <p>
              This property doesn't meet our requirements for lending
              unfortunately! Please try another property.
            </p>
          )} */}
        <p>
          You can complete an agreement in principle by clicking this{" "}
          <a href="https://www.halifax.co.uk/mortgages/mortgage-calculator/agreement-in-principle.html">
            {" "}
            link{" "}
          </a>
          to check what we can lend to you.
        </p>
      </section>
      {/* )} */}
    </>
  );
};
