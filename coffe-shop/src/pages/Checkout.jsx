import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const { register, handleSubmit, reset } = useForm();

  function send(data) {
   
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    
    orders.push(data);

    
    localStorage.setItem("orders", JSON.stringify(orders));

    toast.success("Order registered successfully ☕");

    console.log(data);

    clearCart();
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(send)}
      className="flex flex-col gap-4 p-6 max-w-md mx-auto"
    >
      <input
        {...register("name")}
        placeholder="Name"
        className="border p-3 rounded"
      />

      <input
        {...register("phone")}
        placeholder="Phone Number"
        className="border p-3 rounded"
      />

      <input
        {...register("address")}
        placeholder="Address"
        className="border p-3 rounded"
      />

      <button
        className="bg-amber-700 hover:bg-amber-900 text-white p-3 rounded"
      >
        Submit Order
      </button>
    </form>
  );
}

export default Checkout;