import React, { FC, useEffect } from "react";

export const PostCodeFinder: FC = (): React.ReactElement => {
  useEffect(() => {
    const inputElement = document.getElementById("input") as HTMLInputElement;

    const formatPostCode = (str: string) => {
      if (inputElement) {
        str = str.toLowerCase();
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
      // Do something with the formatted post code if needed
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

  return <input id="input" type="text" />;
};
