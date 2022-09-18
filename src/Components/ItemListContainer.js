import Container from 'react-bootstrap/Container';

const  ItemListContainer= ({greeting}) => {
    //en app.js debajo del navbar
    return (
        <Container>
        <h1>Mis Productos</h1>
        <h3>{greeting}</h3>
        </Container>
      );
}
 
export default ItemListContainer;