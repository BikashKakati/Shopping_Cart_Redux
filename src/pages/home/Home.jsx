import React, { useEffect, useState } from 'react'
import './Home.css'
import Cards from '../../components/cards/Cards'

const Home = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortCallback, setSortCallback] = useState(()=>()=>{});
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
        <div className="filter-box">
          <h3 className="filter-heading">Product Filter</h3>


          <ul className="filter-list">
            <li className="filters" onClick={()=>setSortCallback(()=>(a,b)=>a.price-b.price)}>
              <input type="radio" id="ascending" name="filter" value="ascending"/>
              <label htmlFor="ascending">Ascending</label>
            </li>
            <li className="filters" onClick={()=>setSortCallback(()=>(a,b)=>b.price-a.price)}>
              <input type="radio" id="descending" name="filter" value="descending" />
              <label htmlFor="descending">Descending</label></li>
            <li className="filters" onClick={()=>setSortCallback(()=>(a,b)=>a.title.localeCompare(b.title))}>
              <input type="radio" id="atoz" name="filter" value="atoz" />
              <label htmlFor="atoz">A to Z</label>
            </li>
            <li className="filters" onClick={()=>setSortCallback(()=>(a,b)=>b.title.localeCompare(a.title))}>
              <input type="radio" id="ztoa" name="filter" value="ztoa" />
              <label htmlFor="ztoa">Z to A</label>
            </li>
          </ul>
          
        </div>
        <div className="products-box">
          {
            loading ?
              <div className='loading'></div>
              :
              (cards.sort(sortCallback).map(card => (<Cards key={card.id} card={card} />)))
          }
        </div>
      </div>
    </>
  )
}

export default Home