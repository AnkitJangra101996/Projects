import Banner from "../components/Home/Banner";
import Review from "../components/Home/Review";
import Product from "../components/Product";

const Home = () => {
  return (
    <div className="">
      {/* Banner */}
      <Banner />

      {/* Latest Products */}
      <div className="latest-products flex bg-neutral-content p-10 justify-between items-center flex-col">
        <h2 className="text-center text-4xl font-bold tracking-tight text-info mb-6 sm:text-5xl">
          Latest Products
        </h2>
        <div className="product-container flex flex-row gap-10 container">
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      {/* Favourite Products */}
      <div className="fav-products flex bg-neutral-content p-10 justify-between items-center flex-col mt-10">
        <h2 className="text-center text-4xl font-bold tracking-tight text-info mb-6 sm:text-5xl">
          Favourite Products
        </h2>
        <div className="product-container flex flex-row gap-10 container">
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      {/* Happy Customers */}
      <Review />
      {/* Newsletter  */}
    </div>
  );
};

export default Home;
