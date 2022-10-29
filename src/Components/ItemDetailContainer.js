import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';
//import { traerProducto } from "../datos/products";
import ItemDetail from "./ItemDetails";
import { getProduct } from "../utils/products";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState()
  const { id } = useParams();
  
  useEffect(() => {
//    traerProducto(id)
    getProduct(id)
      .then((data) => {
        setProduct(data)
      })
      .catch(error => console.warn(error))
  }, [id])

  return (
    <Container>
      <h1>Detalle del Producto</h1>
      {product && <ItemDetail product={product} />}
    </Container>    
  );
}
 
export default ItemDetailContainer;