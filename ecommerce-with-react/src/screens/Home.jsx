import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../api/productData";

const Home = () => {
  const [newProds, setNewProds] = useState([]);
  // const [showQuickLook, setShowQuickLook] = useState(false);
  // const modalRef = useRef();
  // useEffect(() => {
  //   showQuickLook && modalRef.current.showModal();
  //   console.log(showQuickLook);
  // }, [showQuickLook]);

  const handleChange = ({ target }) => {
    setNewProds(
      products.filter((prod) =>
        prod.title.toLocaleLowerCase().includes(target.value)
      )
    );
  };

  useEffect(() => {
    setNewProds(products);
  }, []);

  return (
    <>
      {/* Search Elements */}
      <div className="flex justify-center items-center w-[100%] mb-6">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered max-w-[15rem]"
          onChange={handleChange}
        />
      </div>
      {/* <HeroHome /> */}
      <div className="product-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center px-[0.5rem] lg:px-0 items-stretch">
        {newProds.length > 0 ? (
          newProds.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <h1 className="text-3xl">No Products :(</h1>
        )}
      </div>

      {/* Quick Look Feature */}
      {/* {showQuickLook && (
        <dialog ref={modalRef} className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => setShowQuickLook(false)}
              >
                ✕
              </button>
            </form>
            <div className="bg-gray-100 dark:bg-gray-800 py-8">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                  <div className="md:flex-1 px-4">
                    <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                      <img
                        className="w-full h-full object-cover"
                        src={showQuickLook.image}
                        alt="Product Image"
                      />
                    </div>
                    <div className="flex -mx-2 mb-4">
                      <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                          Add to Cart
                        </button>
                      </div>
                      <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                          Add to Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="md:flex-1 px-4">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      Product Name
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed sed ante justo. Integer euismod libero id mauris
                      malesuada tincidunt.
                    </p>
                    <div className="flex mb-4">
                      <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">
                          Price:
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">
                          $29.99
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">
                          Availability:
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">
                          In Stock
                        </span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Select Color:
                      </span>
                      <div className="flex items-center mt-2">
                        <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2" />
                        <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2" />
                        <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2" />
                        <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2" />
                      </div>
                    </div>
                    <div className="mb-4">
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Select Size:
                      </span>
                      <div className="flex items-center mt-2">
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                          S
                        </button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                          M
                        </button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                          L
                        </button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                          XL
                        </button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                          XXL
                        </button>
                      </div>
                    </div>
                    <div>
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Product Description:
                      </span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed sed ante justo. Integer euismod libero id mauris
                        malesuada tincidunt. Vivamus commodo nulla ut lorem
                        rhoncus aliquet. Duis dapibus augue vel ipsum pretium,
                        et venenatis sem blandit. Quisque ut erat vitae nisi
                        ultrices placerat non eget velit. Integer ornare mi sed
                        ipsum lacinia, non sagittis mauris blandit. Morbi
                        fermentum libero vel nisl suscipit, nec tincidunt mi
                        consectetur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      )} */}
    </>
  );
};

export default Home;
