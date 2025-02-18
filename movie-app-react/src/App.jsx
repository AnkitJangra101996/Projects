import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import { Favourite } from "./screens/Favourite";
import { NotFound } from "./screens/NotFound";

function App() {
  return (
    <>
      <Header />
      <div className="main mt-3" style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
