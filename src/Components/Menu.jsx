import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Menu = () => {
  const { addToCart } = useContext(CartContext);

  const menuItems = [
    { id: 1, name: "Espresso", price: 3.0 },
    { id: 2, name: "Cappuccino", price: 4.0 },
    { id: 3, name: "Sandwich", price: 5.0 },
  ];

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
