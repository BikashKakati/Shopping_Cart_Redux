import {Link, NavLink} from 'react-router-dom';
import './Navbar.css';
import {useSelector} from 'react-redux';

const Navbar = () => {
  const {cartBox} = useSelector((state) => state.cart);
  return (
    <>
    <nav className="primary-navbar">
        <ul className="nav-list">
            <NavLink to="/" className="nav-links"><li>Home</li></NavLink>
            <NavLink to="/cart" className="nav-links"><li>My Cart<span style={!!cartBox.length? {color:"white"} : {color:"red"}} className="item-counter">{cartBox.length}</span></li></NavLink>
        </ul>

    </nav>
    </>
  )
}

export default Navbar