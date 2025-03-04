import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./screens/Login";
import Register from "./screens/Register";
import NotFound from "./screens/NotFound";
import Dashboard from "./screens/Dashboard";
import { useState } from "react";
import Loader from "./components/Loader";
import { ToastContainer } from "react-toastify";

function App() {
  const [loading, setLoading] = useState();
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {loading && <Loader loading={loading} />}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
          theme="light"
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
