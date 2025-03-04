import { useContext } from "react";
import { ThemeContext } from "../context/Theme";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { AiOutlineDelete } from "react-icons/ai";

const Header = () => {
  const { setTheme } = useContext(ThemeContext);
  const { cartItems, cartTotal, removeItem } = useCartContext();
  const handleThemeChange = ({ target }) => {
    const themeName = target.textContent.trim();
    setTheme(themeName);
    localStorage.setItem("perso-shopping-app-theme", themeName);
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm lg:px-8">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            Perso Shopping
          </Link>
        </div>
        <div className="flex-none">
          {/* Cart Elements */}
          <div className="dropdown dropdown-center mr-4">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cartItems.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 min-w-max shadow"
            >
              <div className="card-body p-3">
                {/* Cart Items Info */}
                <ul className="list bg-base-100 rounded-box shadow-md">
                  {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                      <li key={item.id} className="list-row items-center">
                        <div className="text-4xl font-thin opacity-30 tabular-nums">
                          {index < 10 ? `0${index + 1}` : index}
                        </div>
                        <div>
                          <img
                            className="size-10 rounded-box"
                            src={item.image}
                          />
                        </div>
                        <div className="list-col-grow">
                          <div>{item.title.slice(0, 18) + "..."}</div>
                          <div className="text-xs uppercase font-semibold opacity-60">
                            Quantity: {item.quantity}
                          </div>
                          <div className="text-xs uppercase font-semibold opacity-60">
                            Price: $ {item.price}
                          </div>
                        </div>
                        <button
                          className="btn btn-square btn-ghost"
                          onClick={() => removeItem(item.id)}
                        >
                          <AiOutlineDelete className="text-xl" />
                        </button>
                      </li>
                    ))
                  ) : (
                    <h1 className="text-2xl p-4">Empty Cart</h1>
                  )}
                </ul>
                {/* Cart Items Info */}
                <div
                  className={`card-actions flex justify-between items-center gap-4 flex-row mt-3 ${
                    cartTotal ? "" : "hidden"
                  }`}
                  style={{ flexWrap: "nowrap" }}
                >
                  <span className="text-info text-xl">
                    Total: $&nbsp;{cartTotal}
                  </span>
                  <Link
                    to="/cart"
                    className="btn btn-primary w-[100%] max-w-40"
                  >
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Profile Button */}
          <div className="dropdown dropdown-center mr-4">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          {/* Theme Button */}
          <div className="dropdown dropdown-center">
            <div tabIndex={0} role="button" className="btn m-1">
              Theme
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 min-w-max p-2 shadow-sm"
              onClick={handleThemeChange}
            >
              <li>
                <a>light</a>
              </li>
              <li>
                <a>dark</a>
              </li>
              <li>
                <a>winter</a>
              </li>
              <li>
                <a>dim</a>
              </li>
              <li>
                <a>abyss</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
