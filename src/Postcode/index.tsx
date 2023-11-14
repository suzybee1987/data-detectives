import React, { FC, useEffect, useState } from "react";

export const PostCodeFinder: FC = (): React.ReactElement => {
  const [inspectionData, setInspectionData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace the URL with your API endpoint

        const apiUrl =
          "/api/get-inspection-data?code=7dmx_V2A6ZgyAlXiy1lRFZ415KNL1UsYj1b1QnNjcGydAzFuPdygKQ==&&columnName=UPRN&&columnValue=10012142007";

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setInspectionData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount

  useEffect(() => {
    const inputElement = document.getElementById("input") as HTMLInputElement;

    const formatPostCode = (str: string) => {
      if (inputElement) {
        str = str.toUpperCase();
        str = str.replace(/[^0-9a-z]/gi, "");
        const parts = str.match(/^([A-Z]{1,2}\d{1,2}[A-Z]?)\s*(\d[A-Z]{2})$/);

        if (parts) {
          parts.shift();
          str = parts.join(" ");
        }
        return str;
      }
    };

    const handleBlur = () => {
      const inputVal = inputElement?.value;
      const formattedPostCode = formatPostCode(inputVal);

      // Set the formatted postcode as the input value
      if (inputElement) {
        inputElement.value = formattedPostCode || ""; // ensure the value is not null
      }

      // Do something with the formatted postcode if needed
      console.log(formattedPostCode);
    };

    if (inputElement) {
      inputElement.addEventListener("blur", handleBlur);
    }

    return () => {
      // Cleanup: remove the event listener when the component is unmounted
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
        <pre>{JSON.stringify(inspectionData, null, 2)}</pre>
      ) : (
        // Loading state or error handling
        <p>Loading...</p>
      )}
    </div>
  );
};
