import React from 'react'

export const Rating = () => {
  return (
    <div className="rating rating-lg my-4 flex justify-center">
      <input type="radio" name="rating-9" className="rating-hidden" />
      <input type="radio" name="rating-9" className="mask mask-star-2" />
      <input
        type="radio"
        name="rating-9"
        className="mask mask-star-2"
        defaultChecked
      />
      <input type="radio" name="rating-9" className="mask mask-star-2" />
      <input type="radio" name="rating-9" className="mask mask-star-2" />
      <input type="radio" name="rating-9" className="mask mask-star-2" />
    </div>
  );
}
