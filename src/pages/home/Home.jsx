import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useSelector } from 'react-redux'

import Cards from '../../components/cards/Cards'
import './Home.css'
import Spinner from '../../components/spinner/Spinner'

const Home = () => {
  const { searchProduct } = useSelector((state) => state.cart);
  const { data: productsData, loading } = useFetch();
  const [sortCallback, setSortCallback] = useState(() => () => { });


  return (
    <>
      <div className="container">
        <div className="filter-box">
          <h3 className="filter-heading">Product Filter</h3>
          <ul className="filter-list">
            <li className="filters" >
              <input type="radio" id="ascending" name="filter" value="ascending" onChange={() => setSortCallback(() => (a, b) => a.price - b.price)} />
              <label htmlFor="ascending">Prices(Low to High)</label>
            </li>
            <li className="filters" >
              <input type="radio" id="descending" name="filter" value="descending" onChange={() => setSortCallback(() => (a, b) => b.price - a.price)} />
              <label htmlFor="descending">Prices(High to Low)</label></li>
            <li className="filters" >
              <input type="radio" id="atoz" name="filter" value="atoz" onChange={() => setSortCallback(() => (a, b) => a.title.localeCompare(b.title))} />
              <label htmlFor="atoz">Names(A to Z)</label>
            </li>
            <li className="filters" >
              <input type="radio" id="ztoa" name="filter" value="ztoa" onChange={() => setSortCallback(() => (a, b) => b.title.localeCompare(a.title))} />
              <label htmlFor="ztoa">Names(Z to A)</label>
            </li>
            <button className="btn" onClick={() => setSortCallback(() => () => { })}>Clear Filter</button>
          </ul>

        </div>
        <div className="products-box">
          {
            loading ?
              <Spinner />
              :
              (productsData?.filter(product => product.title.toLowerCase().includes(searchProduct.toLowerCase())).sort(sortCallback)?.map(product => (<Cards key={product.id} card={product} />)))
          }
        </div>
      </div>
    </>
  )
}

export default Home