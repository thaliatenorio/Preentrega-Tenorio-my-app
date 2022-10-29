import { useContext, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import CartContext from "../contexts/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { createOrder } from "../utils/orders";
import OrderModal from "./OrderModal";

const buyerMock = {
  name: 'Decoracion',
  phone: '1122334455',
  email: 'info.mail@gmail.com'
}

const Cart = () => {
  const { cart, total, removeItem, clear } = useContext(CartContext);
  const [user, setUser] = useState(buyerMock);
  const [showModal, setShowModal] = useState(false);
  const [orderId, setOrderId] = useState();

  const handleRemove = (itemId) => {
    removeItem(itemId);
  }

  const handleOpen = () => setShowModal(true);

  const handleClose = () => setShowModal(false);

  const handleBuy = async () => {
    const newOrder = {
      buyer: buyerMock,
      items: cart,
      total
    };
    const newOrderId = await createOrder(newOrder);
    setOrderId(newOrderId);
    clear();
  }

  const showTable = cart.length > 0

  return (
    <Container className='cartContainer'>
      <h1>Carrito de Compras</h1>
      {showTable && (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td><FaTrashAlt onClick={() => handleRemove(item.id)}/></td>
                  </tr>
                ))}
            </tbody>
            
          </Table>
          <h3>Total: $ {total}</h3>
          <Button variant="outline-secondary" onClick={clear}>Vaciar Carrito</Button>
          <Button variant="outline-secondary" onClick={handleOpen}>Finalizar compra</Button>
          
        </>
      )}
      {!showTable && (
        <>
          <h3>Tu carrito esta vacío</h3>
          <Link to='/'>
            <Button variant="outline-secondary">Ver productos</Button>
          </Link>
        </>
      )}
      <OrderModal
        showModal={showModal}
        onClose={handleClose}
        onBuy={handleBuy}
        orderId={orderId}
      />
    </Container>
  );
}
 
export default Cart;