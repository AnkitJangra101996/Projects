import { Button } from "rsuite";
import { createPortal } from "react-dom";
import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button className="button" onClick={() => setShow(true)}>Hello World</Button>
      {show &&
        createPortal(
          <>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <p>This child is placed in the document body.</p>
            <button onClick={() => setShow(false)}>close</button>
          </>,
          document.body
        )}
    </>
  );
};

export default App;
