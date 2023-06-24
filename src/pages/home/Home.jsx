import React, { useEffect, useState } from 'react'
import './Home.css'
import Cards from '../../components/cards/Cards'

const Home = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "https://fakestoreapi.com/products";
  
  useEffect(() => {
    fetchApi()
  }, [url])
  
  const fetchApi = async () => {
    setLoading(true);
    const res = await fetch(url);
    const product = await res.json();
    setCards(product);
    setLoading(false);
  }

  return (
    <>
      <div className="container">
        {
          loading ?
            <div className='loading'></div>
            :
            <>
              {
                cards.map((card) => {
                  return (
                    <Cards key={card.id} card={card} />
                  )
                })
              }
            </>
        }
      </div>
    </>
  )
}

export default Home