import React, { useEffect } from 'react'
import './Cart.css'
import { useSelector, useDispatch } from 'react-redux';
import {calculateTotal} from '../../store/CartSlice';
import { remove } from '../../store/CartSlice';

const Cart = () => {

  const {amount,cartBox} = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (itemIndex) => {
    dispatch(remove(itemIndex));
  }
  useEffect(() =>{
    dispatch(calculateTotal());
  },[cartBox]);

  return (
    <div className="cart__container">
      {
        cartBox.length != 0 ?
        <>
          <div className="cart__innerbox">
            {
              cartBox.map((item, index) => (
                <div className="cart__itmes" key={index}>
                  <div className="item__img">
                    <img src={item ? item.image : ""} />
                  </div>
                  <span className="item__title">{item ? item.title.slice(0, 24) : ""}</span>
                  <span className="itme__price">{item ? item.price : ""} </span>
                  <button onClick={() => { handleRemove(index) }}>Remove</button>
                </div>
              ))
            }
          </div>
          <div className="total"><span >Total </span><span>{Math.floor(amount)}</span></div>
          
          </>
          :
          <h2>Your Cart is Empty</h2>
      }
    </div>
  )
}

export default Cart