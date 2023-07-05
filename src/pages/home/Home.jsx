import React, { useEffect, useState } from 'react'
import './Home.css'
import Cards from '../../components/cards/Cards'

const Home = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    let subscribe = true;
    setLoading(true);

    fetchApi(url).then(cardData => {
      if (subscribe) {
        setCards(cardData);
        setLoading(false);
      }
    }).catch(err => setLoading(false));
    return () => { subscribe = false }
  }, [])

  const fetchApi = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (err) {
      return err;
    }
  }

  return (
    <>
      <div className="container">
        <div className="filter-box"></div>
        <div className="products-box">
          {
            loading ?
              <div className='loading'></div>
              :
              (cards.map(card => (<Cards key={card.id} card={card} />)))
          }
        </div>
      </div>
    </>
  )
}

export default Home