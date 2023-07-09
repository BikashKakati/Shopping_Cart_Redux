import { useDispatch, useSelector } from 'react-redux';
import { searchQuery } from '../../store/CartSlice';

import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const { cartBox, searchProduct } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <nav className="primary-navbar">
      <ul className="nav-list">
        <NavLink to="/" className="nav-links"><li>Home</li></NavLink>
        <NavLink to="/cart" className="nav-links"><li>My Cart<span style={!!cartBox.length ? { color: "white" } : { color: "red" }} className="item-counter">{cartBox.length}</span></li></NavLink>
        <input type="text" className="search-area" placeholder="serch here" value={searchProduct} onChange={(e) => { dispatch(searchQuery(e.target.value)) }} />
      </ul>

    </nav>
  )
}

export default Navbar