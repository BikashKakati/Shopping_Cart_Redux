import React from 'react'
import {useDispatch} from 'react-redux';
import { add } from '../../store/CartSlice';
import './Cards.css'

const Cards = ({card}) => {
  
  const dispatch = useDispatch()

  const handleAdding = () =>{
    dispatch(add({...card, quantity: 1}));
  }


  const{image,title,description,price} = card
  return (
    <>
    <div className="card">

      <div className="img-box">
        <img src={card ? image : ""} />
      </div>

      <div className="details">
        <button onClick={handleAdding}>Add Cart</button>
        <h5>{card ? title : ""}</h5>
        <span>{card ? "Rs "+price.toFixed(2) : ""}</span>
        <p>{card ? description.slice(0, 90)+"...." : ""}</p>
      </div>
        
    </div>
    </>
  )
}

export default Cards