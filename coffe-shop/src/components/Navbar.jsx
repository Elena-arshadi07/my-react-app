import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-amber-800 text-white flex justify-between items-center px-10 py-5 shadow-lg">

      <h1 className="text-3xl font-bold">
        ☕️ Coffee Shop
      </h1>

      <div className="flex gap-8 text-lg font-semibold">

        <Link
          to="/"
          className="flex items-center gap-2 hover:text-yellow-240"
        >
          Home
        </Link>

        <Link
          to="/products"
          className="flex items-center gap-2 hover:text-yellow-300"
        >
          Products
        </Link>

        <Link
          to="/cart"
          className="flex items-center gap-2 hover:text-yellow-300"
        >
          <FaShoppingCart />
          Cart
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;