import React, { FC, useEffect, useState } from "react";

export const PostCodeFinder: FC = (): React.ReactElement => {
  const [inspectionData, setInspectionData] = useState(null);

  useEffect(() => {
    const inputElement = document.getElementById("input") as HTMLInputElement;

    const handleBlur = async () => {
      const inputVal = inputElement?.value;

      try {
        if (inputVal) {
          const apiUrl = `/api/get-inspection-data?code=7dmx_V2A6ZgyAlXiy1lRFZ415KNL1UsYj1b1QnNjcGydAzFuPdygKQ==&&columnName=UPRN&&columnValue=${inputVal}`;

          const response = await fetch(apiUrl, { mode: "no-cors" });

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();
          setInspectionData(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (inputElement) {
      inputElement.addEventListener("blur", handleBlur);
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener("blur", handleBlur);
      }
    };
  }, []); // empty dependency array ensures the effect runs once after initial render

  return (
    <div className="m-3">
      <h2 className="small">Please enter your preferred post code:</h2>
      <input id="input" type="text" required />
      {inspectionData ? (
        // Render your data here
        <pre className="text-white">
          {JSON.stringify(inspectionData, null, 2)}
        </pre>
      ) : (
        // Loading state or error handling
        <p>Loading...</p>
      )}
    </div>
  );
};
