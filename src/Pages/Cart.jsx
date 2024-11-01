import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "../components/ItemList";
import { clearCart } from "../redux/slice/cartSlice";
import { useLocation } from "react-router-dom";

export const Cart = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  // console.log(location);

  const handleOnClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="px-10 py-6 ">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Cart</h1>
        <button
          className="mt-2 px-4 py-2 bg-gray-900 text-white rounded-lg shadow-lg"
          onClick={handleOnClearCart}
        >
          Clear Cart
        </button>
      </div>
      {items.length ? (
        <div className="flex justify-center">
          <div className="lg:w-2/3 mt-6 w-full bg-gray-50 mb-3 px-6 py-4 shadow-lg rounded-lg">
            <ItemList items={items} location={location} />
          </div>
        </div>
      ) : (
        <h1 className="text-center mt-10 font-semibold">Cart is Empty</h1>
      )}
    </div>
  );
};
