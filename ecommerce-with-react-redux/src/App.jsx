import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import ProductPage from "./screens/ProductPage";

function App() {
  return (
    <>
      <Header />
      <main className="main my-3 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
