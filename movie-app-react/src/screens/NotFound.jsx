import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const [time, setTime] = useState(10);
  const naviagte = useNavigate();
  const timeInterval = setInterval(() => {
    if (setTime === 0) {
      naviagte("/");
      clearInterval(timeInterval);
    } else {
      setTime(time - 1);
    }
  }, 1000);

  return (
    <>
      <h1>Not Found Component</h1>
      <h2>Redirect to home in {time} seconds.</h2>
    </>
  );
};
