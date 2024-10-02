// src/components/Bill.jsx
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Bill = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Bill</h2>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default Bill;
