import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {

  const { addCart } = useContext(CartContext);

  return (
    <div className="w-full h-44 bg-white rounded-3xl over-flow-hidden border-amber-200 shadow-lg border hover:shadow-x1 hover:-translate-y-2 transition-all duration-300 cursor-pointer w-64 mx-auto">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover object-center p-3 rounded-t-3xl transition-transform duration-300 hover:scale-105"
      />

      <div className="p-4 text-center">

        <h2 className="text-xl font-bold text-amber-900">
          {product.name}
        </h2>

        <p className="text-lg text-gray-700 text-sm mt-2 font-semibold">
          ${product.price}
        </p>
        <p className="text-sm text-amber-700 mt-2"> {product.description}</p>
        <p className="text-amber-700 font-semibold text-sm mt-2 mb-5 leading-6">{product.description}</p>

        <button
          onClick={() => addCart(product)}
          className="bg-amber-700 hover:bg-amber-900 text-white px-5 py-2 rounded-full"
        >
         Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;