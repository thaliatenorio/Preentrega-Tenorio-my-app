import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Item from "./Item";
import ItemCount from "./ItemCount";
import CartContext from "../contexts/CartContext";
import Card from 'react-bootstrap/Card';

// <Item product={product} />


const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const [count, setCount] = useState(0);
  const [showItemCount, setShowItemCount] = useState(true);

  const handleAdd = (value) => {
    setCount(value);
    setShowItemCount(false);
    addItem(product, value);
  };

  return (
    <div className='itemDetailContainer'>
      <Card >
      <Card.Img variant="top" src={product.pictureUrl} style={{ width: '22rem' }} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Title>
          $ {product.price}
        </Card.Title>  
        <Card.Text>
          {product.description}
        </Card.Text>
        <Card.Text>
          {product.category}
        </Card.Text>
            
      </Card.Body>
      {showItemCount && (<ItemCount
          initial={1}
          stock={10}
          onAdd={handleAdd}
        />)}
    </Card>
      
      
      {!showItemCount && (
          <Link to='/cart'>
            <Button variant="outline-secondary">
                Ver Carrito
            </Button>
          </Link>
      )}
    </div>
  );
}
 
export default ItemDetail;