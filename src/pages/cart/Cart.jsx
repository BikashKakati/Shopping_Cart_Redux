import React, { useEffect } from 'react'
import './Cart.css'
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../store/CartSlice';

const Cart = () => {

  const { cartBox } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (itemIndex) => {
    dispatch(remove(itemIndex));
  }

  const totalPrice = () => {
    let total = 0;
    cartBox.forEach(card => {
      total += (card.price * card.quantity);
    })
    return total.toFixed(2);
  }

  return (
    <div className="cart__container">
      {
        !!cartBox.length ?
          <>
            <div className="cart__innerbox">
              {
                cartBox.map((item) => (
                  <div className="cart__items" key={item.id}>
                    <div className="item__img">
                      <img src={item ? item.image : ""} />
                    </div>
                    <span className="item__title">{item ? item.title.slice(0, 24) : ""}</span>
                    <span className="item__price">{item ? `${item.price.toFixed(2)} x ${item.quantity}` : ""} </span>
                    <button className="btn" onClick={() => handleRemove(item.id)} >Remove</button>
                  </div>
                ))
              }
            </div>
            <div className="total">
              <span >Total Price</span>
              <span>{totalPrice()}</span>
            </div>

          </>
          :
          <h2>Your Cart is Empty</h2>
      }
    </div>
  )
}

export default Cart