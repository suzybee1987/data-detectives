import React, { FC, useEffect, useState } from "react";

export const PostCodeFinder: FC = (): React.ReactElement => {
  const [inspectionData, setInspectionData] = useState<any>(null);
  const BASE_URL = "https://ambitious-stone-02fd47403.4.azurestaticapps.net/";
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <table className="table text-white">
            <tr style={{ padding: "20px" }}>
              <th scope="col">Last Inspection Date </th>
              <th scope="col">Overall Property Condition </th>
              <th scope="col">Suitable as mortgage security? </th>
            </tr>
            <tr>
              <td>{inspectionData[0]["Assesment Date"]}</td>
              <td>{inspectionData[0]["Overall Condition"]}</td>
              <td>{inspectionData[0]["Suitable as mortgage security"]}</td>
            </tr>
          </table>
        </div>
      ) : (
        // Loading state or error handling
        <p>Loading...</p>
      )}
    </div>
  );
};
