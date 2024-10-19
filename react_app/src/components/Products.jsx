import React from "react";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  const products = [
    {
      id: 1,
      image:
        "https://img.daisyUI.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Shoes",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      id: 2,
      image:
        "https://img.daisyUI.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Sneakers",
      description: "Comfortable shoes for running and workouts.",
    },
    {
      id: 3,
      image:
        "https://img.daisyUI.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Boots",
      description: "Stylish boots for every season.",
    },
    {
      id: 4,
      image:
        "https://img.daisyUI.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Sandals",
      description: "Perfect for summer outings.",
    },
    {
      id: 5,
      image:
        "https://img.daisyUI.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Loafers",
      description: "Casual yet classy loafers.",
    },
    {
      id: 6,
      image:
        "https://img.daisyUI.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Heels",
      description: "Elegant heels for formal events.",
    },
    {
      id: 7,
      image:
        "https://img.daisyUI.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Flip Flops",
      description: "Lightweight and easy to wear.",
    },
    {
      id: 8,
      image:
        "https://img.daisyUI.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Running Shoes",
      description: "High-performance shoes for athletes.",
    },
    {
      id: 9,
      image:
        "https://img.daisyUI.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Walking Shoes",
      description: "Comfortable shoes for daily walks.",
    },
    {
      id: 10,
      image:
        "https://img.daisyUI.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Work Boots",
      description: "Durable boots for tough jobs.",
    },
  ];

  const handleBuyClick = (title) => {
    alert(`You bought ${title}!`);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          onBuy={() => handleBuyClick(product.title)}
        />
      ))}
    </div>
  );
};


