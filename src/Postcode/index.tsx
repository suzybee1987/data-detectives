import React, { FC, useEffect, useState } from "react";
import { badData, goodData, medData } from "../mock/mockData";

export const PostCodeFinder: FC = (): React.ReactElement => {
  const [inspectionData, setInspectionData] = useState<any>();
  const [inputData, setInputData] = useState<any>();
  const BASE_URL = "https://ambitious-stone-02fd47403.4.azurestaticapps.net/";
  useEffect(() => {
    const inputElement = document.getElementById("input") as HTMLInputElement;

    const handleBlur = async () => {
      const input = inputElement?.value;
      setInputData(input);
      switch (input) {
        case "0001":
          setInspectionData(goodData);
          break;
        case "0002":
          setInspectionData(medData);
          break;
        case "0003":
          setInspectionData(badData);
          break;
      }

      // try {
      //   if (inputVal) {
      //     const apiUrl = `/api/get-inspection-data?code=7dmx_V2A6ZgyAlXiy1lRFZ415KNL1UsYj1b1QnNjcGydAzFuPdygKQ==&&columnName=UPRN&&columnValue=${inputVal}`;

      //     const response = await fetch(apiUrl, { mode: "no-cors" });

      //     if (!response.ok) {
      //       throw new Error("Network response was not ok");
      //     }

      //     const data = await response.json();
      //     setInspectionData(inputVal);
      //   }
      // } catch (error) {
      //   console.error("Error fetching data:", error);
      // }
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
  const color =
    inputData === "0001" ? "green" : inputData === "0002" ? "orange" : "red";
  return (
    <div className="m-3">
      <h2 className="small">Please enter your preferred post code:</h2>
      <input id="input" type="text" required />
      <hr />

      {inspectionData ? (
        // Render your data here
        <div>
          <table className="table text-white">
            <thead>
              <tr>
                <th>Suitable as mortgage security</th>
                <th>Structural issues?</th>
                <th>At risk of flooding?</th>
              </tr>
            </thead>
            <tbody style={{ color: color }}>
              <tr>
                <td>{inspectionData["Suitable as mortgage security"]}</td>
                <td>
                  {
                    inspectionData[
                      "Are you aware of any structural movement, landslip or heave in the property or in the immediate vicinity?"
                    ]
                  }
                </td>
                <td>
                  {
                    inspectionData[
                      "Is there any reason to believe the property may be at risk of flooding?"
                    ]
                  }
                </td>
              </tr>
            </tbody>
          </table>

          <table className="table text-white">
            <thead>
              <tr>
                <th>Condition</th>
                <th>Risk Factors</th>
                <th>Traditional construction</th>
              </tr>
            </thead>
            <tbody style={{ color: color }}>
              <tr>
                <td>{inspectionData["Condition"]}</td>
                <td>
                  {inspectionData["Are there any Adverse Locational Factors?"]}
                </td>
                <td>
                  {inspectionData["Is non traditional construction type"]}
                </td>
              </tr>
            </tbody>
          </table>

          {inputData === "0001" && (
            <p>
              This property is <strong style={{ color: "green" }}>GREEN</strong>{" "}
              - we think it's a gorgeous option for your next home!
            </p>
          )}

          {inputData === "0002" && (
            <p>
              This property is{" "}
              <strong style={{ color: "orange" }}>AMBER</strong> - we think it's
              a ok option for your next home!
            </p>
          )}

          {inputData === "0003" && (
            <p>
              This property <strong style={{ color: "red" }}>RED</strong> - we
              will not lend on this property!
            </p>
          )}
        </div>
      ) : (
        // Loading state or error handling
        <p>Loading...</p>
      )}
    </div>
  );
};
