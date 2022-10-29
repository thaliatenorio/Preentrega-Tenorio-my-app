import Container from 'react-bootstrap/Container';
import { obtenerProductos, traerProductosByCategory } from '../datos/products';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProducts, getProductsByCategory } from '../utils/products';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId)
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error))
    } else {
      getAllProducts()
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error))
    }
  }, [categoryId])
  
  //useEffect(() => {
  //  if (categoryId) {
  //    traerProductosByCategory(categoryId)
  //      .then((data) => setProducts(data))
  //      .catch((error) => console.warn(error))
  //  } else {
  //    obtenerProductos()
  //      .then((data) => setProducts(data))
  //      .catch((error) => console.warn(error))
  //  }
  //}, [categoryId])

  return (
    <Container>
      <h1>Productos</h1>
      <h3 className="greeting">{greeting}</h3>
      <ItemList products={products} />
    </Container>
  );
}
 
export default ItemListContainer;