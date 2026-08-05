import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {

  const { cart, removeCart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold">
          Shopping Cart
        </h1>

        <p className="mt-5">
          Your cart is empty.
        </p>
      </div>
    );
  }

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cart.map((item) => (

        <div
          key={item.id}
          className="flex justify-between items-center bg-white rounded-xl shadow p-4 mb-4"
        >

          <div className="flex items-center gap-5">

            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 rounded-lg object-cover"
            />

            <div>

              <h2 className="text-xl font-bold">
                {item.name}
              </h2>

              <p>
                ${item.price}
              </p>

              <p>
                Quantity: {item.quantity}
              </p>

            </div>

          </div>

          <button
            onClick={() => removeCart(item.id)}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800"
          >
            Remove
          </button>

        </div>

      ))}

      <h2 className="text-2xl font-bold mt-8">
        Total: ${total}
      </h2>

      <Link
        to="/checkout"
        className="inline-block mt-6 bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-900"
      >
        Proceed to Checkout
      </Link>

    </div>
  );
}

export default Cart;