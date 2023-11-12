import React, { FC, useEffect } from "react";

export const PostCodeFinder: FC = (): React.ReactElement => {
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
    </div>
  );
};
