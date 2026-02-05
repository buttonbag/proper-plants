import CartItem from "./CartItem"
export default function Cart({cart, removeFromCart, addToCart}) {

  return (
      <>
      <h2>Cart</h2>
      { cart.length === 0 ? (
        <ol>
          <p>your cart is empty</p>
        </ol>
        ) : (
        <ol>
          {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))}
        </ol>
        )
      } 
      </>
  
  )
}
