import React from "react";

export const Rating = () => {
  return (
    <div className="rating rating-lg flex justify-center Py-3 bg-white">
      <input
        type="radio"
        name="rating-8"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-8"
        className="mask mask-star-2 bg-orange-400"
        defaultChecked
      />
      <input
        type="radio"
        name="rating-8"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-8"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-8"
        className="mask mask-star-2 bg-orange-400"
      />
    </div>
  );
};
