import {Link} from 'react-router-dom';
import './Navbar.css';
import {useSelector} from 'react-redux';

const Navbar = () => {
  const {cartBox} = useSelector((state) => state.cart);
  return (
    <>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">My Cart<span style={cartBox.length === 0 ? {color:"red"} : {color:"white"}}>{cartBox.length}</span></Link></li>
        </ul>

    </nav>
    </>
  )
}

export default Navbar