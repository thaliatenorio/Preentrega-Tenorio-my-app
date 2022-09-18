//import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer';
import './Components/CartWidget.css';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={'Nuestros Destacados'}/>
    </>
  );
}

export default App;
