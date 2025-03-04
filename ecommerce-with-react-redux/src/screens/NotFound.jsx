import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const [time, setTime] = useState(10);
  const navigate = useNavigate();

  const timeInterval = setInterval(() => {
    if (time !== 1) {
      setTime(time - 1);
    } else {
      navigate("/");
      clearInterval(timeInterval);
    }
  }, 1000);

  return (
    <div className="min-h-[100vh] flex justify-center items-center flex-col">
      <h1 className="text-5xl font-bold">404 | Not Found Page</h1>
      <p className="text-3xl mt-3">
        You will redirect to home in {time} seconds....
      </p>
    </div>
  );
};

export default NotFound;
