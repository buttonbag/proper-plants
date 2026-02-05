import CartItemQuantity from "./CartItemQuantity";

export default function CartItem({item, removeFromCart, addToCart}) {
  return (
    <li className="item">
      {item.name}
      {item.image}
      <CartItemQuantity
        item={item}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
      />
    </li>
  );
};