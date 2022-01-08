import {BrowserRouter, Route} from "react-router-dom"
import './App.css';
import HomeScreen from './HomeScreen';
import ProductScreen from "./ProductScreen";
import CartScreen from "./CartScreen";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/cart" component={CartScreen} />
        <Route eaxct path="/product/:id" component={ProductScreen} />
      </div>
    </BrowserRouter>
  );
}

export default App;
