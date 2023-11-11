import React, { FC } from "react";

export const Topics: FC = (): React.ReactElement => {
  const topicsAvailable = [
    "near train station",
    "near green space",
    "heat pump",
    "near train station",
    "near green space",
    "heat pump",
    "near train station",
    "near green space",
    "heat pump",
    "near train station",
    "near green space",
    "heat pump",
    "near train station",
    "near green space",
    "heat pump",
    "near train station",
    "near green space",
    "heat pump",
    "near train station",
    "near green space",
    "heat pump",
    "near train station",
    "near green space",
    "heat pump",
    "near train station",
    "near green space",
    "heat pump",
  ];
  return (
    <div className="row">
      <div className="col">
        {topicsAvailable.map((topic: string) => {
          return (
            <button type="button" className="btn btn-success m-1" key={topic}>
              {topic}
            </button>
          );
        })}
      </div>
    </div>
  );
};
