import { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const QuantityCounter = ({ quantity, setQuantity }) => {
  const handleIncrement = () => {
    setQuantity((quantity += 1));
  };
  const handleDecrement = () => {
    if (quantity === 1) return;
    setQuantity((quantity -= 1));
  };
  return (
    <div className="flex items-center justify-start border w-max p-3 rounded-2xl">
      <button
        id="decrement-btn"
        className="flex justify-center items-center w-6 h-6 rounded-full text-white focus:outline-none bg-gray-400 hover:bg-gray-500"
        onClick={handleDecrement}
      >
        <CiCircleMinus />
      </button>
      <span id="counter" className="text-xl font-bold mx-4">
        {quantity}
      </span>
      <button
        id="increment-btn"
        className="flex justify-center items-center w-6 h-6 rounded-full text-white focus:outline-none bg-indigo-500 hover:bg-indigo-600"
        onClick={handleIncrement}
      >
        <CiCirclePlus />
      </button>
    </div>
  );
};

export default QuantityCounter;
