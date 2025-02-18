import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <>
      <div className="loading-container position-relative">
        <Spinner
          animation="border"
          variant="light"
          className=""
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100vw",
            height: "100vh",
          }}
        />
      </div>
    </>
  );
};

export default Loading;
