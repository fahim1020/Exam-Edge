import React from "react";

export const Diff = () => {
  return (
    <div className="diff aspect-[16/9]">
      <div className="diff-item-1">
        <div className="bg-primary text-primary-content grid place-content-center text-9xl font-black">
          EVENTLYTIC
        </div>
      </div>
      <div className="diff-item-2">
        <div className="bg-[#624646] grid place-content-center text-9xl font-black">
          EVENTLYTIC
        </div>
      </div>
      <div className="diff-resizer"></div>
    </div>
  );
};
