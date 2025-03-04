import { Suspense, useState } from "react";
import { Link } from "react-router-dom";
// import { useCartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  // const { addItem } = useCartContext();
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div
          className="card bg-base-100 w-[100%] shadow-sm"
          onMouseEnter={() => setShowOverlay(true)}
          onMouseLeave={() => setShowOverlay(false)}
        >
          <Link to={`/product/${product?.id}`}>
            <figure>
              <img
                className="object-contain max-w-[300px] height-auto w-[100%] aspect-square"
                src={product?.image}
                alt={product?.title}
              />
            </figure>
          </Link>
          <div className="card-body relative">
            <Link to={`/product/${product?.id}`}>
              <h2 className="card-title">
                {product?.title.slice(0, 30) + "..."}
              </h2>
            </Link>
            <div className="flex justify-between">
              <div className="price text-lg text-red-600">
                {product?.price} $
              </div>
              <div className="rating text-lg text-amber-400">
                {product?.rating.rate}
              </div>
            </div>
            {showOverlay && (
              <div className="product-overlay absolute bottom-0 left-0 w-[100%] bg-neutral-content h-[4rem] flex flex-row items-center justify-around rounded-tl-[0.5rem] rounded-tr-[0.5rem] rounded-bl-[0.5rem] transition rounded-br-[0.5rem]">
                {/* Quick Look Button */}
                {/* <button
                  className="btn btn-soft btn-accent"
                  onClick={() => setShowQuickLook(product?.id)}
                >
                  Quick Look
                </button> */}
                {/* <button
                  className="btn btn-soft btn-accent"
                  onClick={handleFavourite}
                >
                  <FaHeart />
                </button> */}
                <button
                  className="btn btn-soft btn-accent"
                  onClick={() => addItem()}
                >
                  Add To Bag
                </button>
              </div>
            )}
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default ProductCard;
