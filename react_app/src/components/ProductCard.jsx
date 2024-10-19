import React from "react";

export const ProductCard = ({ image, title, description, onBuy }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl my-6">
      <figure className="px-10 pt-10">
        <img src={image} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-primary" onClick={onBuy}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
