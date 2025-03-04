import { useEffect } from "react";

const Loader = ({ loading }) => {
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    return () => (document.documentElement.style.overflow = "auto");
  }, []);

  return (
    <>
      <div className="min-w-[100vw] min-h-[100vh] fixed top-0 left-0 flex justify-center items-center flex-col">
        <div className="bg-black opacity-80 absolute top-0 left-0 min-w-[100vw] min-h-[100vh]"></div>
        <span className="loading loading-spinner loading-xl"></span>
        <h1 className="text-primary text-3xl mt-5">{loading}</h1>
      </div>
    </>
  );
};

export default Loader;
