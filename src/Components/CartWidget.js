import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../contexts/CartContext';
import { Badge } from 'react-bootstrap';
import './CartWidget.css';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
    //Agrego icono dentro del navbar
    return (
        <>
      <Link to="/cart">
        <AiOutlineShoppingCart />
      </Link>
      {totalQuantity > 0 && (
        <Badge pill bg="danger">{totalQuantity}</Badge>
      )}
    </>
      );
}
 
export default CartWidget;