import { useState } from "react";
import Item from "./Item";
import Card from 'react-bootstrap/Card';




const ItemDetail = ({ product }) => {
  const [count, setCount] = useState(0);

  const handleClick = (value) => {
    setCount(value);
  };

  return (
    <>
    <Item product={product} />
    <Card>
      <Card.Body>
        <Card.Title>Detalle del producto</Card.Title>
        <Card.Text>
        {product.description}
        </Card.Text>
      </Card.Body>
      <Card>
      <Card.Body>
      <button onClick={() => handleClick(count - 1)}>-</button>
      <h4>Cantidad {count}</h4>
      <button onClick={() => handleClick(count + 1)}>+</button></Card.Body>
      
    </Card>
    </Card>
      
    </>
  );
}
 
export default ItemDetail;