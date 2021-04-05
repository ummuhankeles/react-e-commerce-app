import './App.css';
import React, { useState, createContext } from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Products from './components/pages/products/Products';
import Login from './components/pages/login/Login';
import Favorite from './components/pages/favotites/Favorite';
import Cart from './components/pages/cart/Cart';
import Main from './components/main/Main';
import Featured from './components/featuredProducts/Featured';
import Footer from './components/footer/Footer';
import NotFound from './components/pages/NotFound';
import { products } from './Global/FeatureContext'

export const FeatureContext = createContext();

const App = () => {

  const [state, setState] = useState({
    cartList: products,
    cart: [],
    favorite: []
  });

  //add product the cart page
  function addToCart (item) { 
    setState({
      ...state,
      cart: state.cart.find(cartItem => cartItem.id === item.id)
        ? state.cart.map(cartItem =>
          cartItem.id === item.id
            ? {...cartItem, count: cartItem.count + 1}
            : cartItem
          )
        : [...state.cart, {...item, count:1}]
    });
  }

  // add product the favorite page
  function addToFavorites (item) {
    setState({
      ...state,
      favorite: state.favorite.find(cartItem => cartItem.id === item.id)
        ? state.favorite.map(cartItem =>
          cartItem.id === item.id
            ? {...cartItem, count: 1}
            : cartItem
          )
        : [...state.favorite, {...item, count:1}]
    });
    
  }

  // increase the product amount in cart page
  function increaseProduct(item) {
    setState({
      ...state,
      cart: state.cart.map(cartItem =>
          cartItem.id === item.id
            ? {...cartItem, count: cartItem.count + 1}
            : cartItem
        )
    })
  }

  // decrease the product amount in cart page
  function decreaseProduct (item) {
    setState({
      ...state,
      cart: state.cart.map(cartItem =>
          cartItem.id === item.id
            ? {...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1}
            : cartItem
        )
    })
  }

  // remove item from favorite page
  function remove(item) {
    setState({
      ...state,
      favorite: state.favorite.filter(cartItem =>
          cartItem.id !== item.id
        )
    })
  }

  // delete item from cart page
  function deleteItem (item) {
    setState({
      ...state,
      cart: state.cart.filter(cartItem =>
          cartItem.id !== item.id
        )
    })
  }

  return (
    <div>
      <FeatureContext.Provider value={state}>
        <Router> 
          <Switch>
            <Route exact path="/" component={Home}>
              <Navbar cartLength={state.cart.length}/>
              <Header/>
              <Main/>
              <Featured addToCart={addToCart} addToFavorites={addToFavorites}/>
              <Footer/>
            </Route>
            <Route path="/products" component={Products}>
              <Navbar cartLength={state.cart.length}/>
              <Products/>
            </Route>
            <Route path="/login" component={Login}>
              <Navbar/>
              <Login/>
            </Route>
            <Route path="/favorites" component={Favorite}>
              <Navbar cartLength={state.cart.length}/>
              <Favorite remove={remove}/>
            </Route>
            <Route path="/cart" component={Cart}>
              <Navbar cartLength={state.cart.length}/>
              <Cart increase={increaseProduct} decrease={decreaseProduct} delete={deleteItem} />
            </Route>
            <Route component={NotFound}>
              <Navbar/>
              <NotFound/>
            </Route>
          </Switch>
        </Router>
      </FeatureContext.Provider>
    </div>
  );
}

export default App;
