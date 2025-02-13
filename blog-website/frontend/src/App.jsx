import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";
import { UserProvider } from "./contexts/auth.context";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <UserProvider>
        <BrowserRouter>
          <Header />
          <div className="main dark:bg-neutral-800">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/register" exact element={<Register />} />
              <Route path="/dashboard" exact element={<Dashboard />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
