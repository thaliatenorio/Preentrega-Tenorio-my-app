import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (

    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={product.pictureURL} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Title>
          $ {product.price}
        </Card.Title>
        <Card.Text>
          {product.category}
        </Card.Text>
          <Link to={`/item/${product.id}`}>
            <Button variant="outline-secondary">
              COMPRAR
            </Button>
          </Link>
      </Card.Body>
    </Card>

  );
}
 
export default Item;

