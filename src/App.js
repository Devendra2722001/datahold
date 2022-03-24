import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Switch, Route } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Footer from "./component/Footer";
import User from "./component/User";
import Checkout from "./component/Checkout";


function App() {
  return (
    <>
    <div class="Mainapp">
      <div class="topfixednav">
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/user" component={User} />
      </Switch>
      
      <Footer/>
      
    </div>
    </>
  );
}

export default App;
