import './App.css';
import Child1 from './Components/Child1';
import Child2 from './Components/Child2';
import CreateNote from './Components/Notes/CreateNote';
import ListNote from './Components/Notes/ListNote';
import Navbar from './Components/ecommerce/Navbar';
import ProductList from './Components/ecommerce/ProductList';

function App() {
  return (
    <div className="App">
      {/* <Child1/>
      <Child2/> */}
      {/* <CreateNote/>
      <ListNote/> */}
      <Navbar/>
      <ProductList/>

    </div>
  );
}

export default App;
