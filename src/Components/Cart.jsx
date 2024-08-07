import React, { useContext, useState, useEffect } from 'react';
import { Ecom } from '../Context';

const Cart = () => {
  const { cart, setCart } = useContext(Ecom);
  const [totalAmount, setTotalAmount] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(0);

  useEffect(() => {
   
    const newTotalAmount = cart.reduce((acc, { item, quantity }) => acc + item.price * quantity, 0);
    setTotalAmount(newTotalAmount.toFixed(2)); 

 
    const charge = newTotalAmount < 500 ? 100 : 0;
    setDeliveryCharge(charge.toFixed(2)); 
  }, [cart]);

  const increaseQuantity = (itemId) => {
    const updatedCart = cart.map(item => {
      if (item.item.id === itemId) {
        item.quantity += 1;
      }
      return item;
    });
    setCart([...updatedCart]);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cart.map(item => {
      if (item.item.id === itemId && item.quantity > 1) {
        item.quantity -= 1;
      }
      return item;
    });
    setCart([...updatedCart]);
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter(item => item.item.id !== itemId);
    setCart([...updatedCart]);
  };

  console.log(cart)

  return (
    <div>
      {cart.map(({ item, quantity }) => (
        <div key={item.id} style={{ width: '250px', border: '2px solid black', margin: '10px' }}>
          <h4>{item.title}</h4>
          <p>Price: {item.price}</p>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
          {quantity}
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
          <button onClick={() => removeItem(item.id)}>Remove</button>
          <p>Total: {(item.price * quantity).toFixed(2)}</p> 
        </div>
      ))}

      <div>
        <p>Items: {cart.length}</p>
        <p>Total Amount: {totalAmount}</p>
        <p>Delivery Charge: {deliveryCharge}</p>
        <p>Grand Total: {(parseFloat(totalAmount) + parseFloat(deliveryCharge)).toFixed(2)}</p> 
      </div>
    </div>
  );
};

export default Cart;
