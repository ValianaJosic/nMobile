import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home/home';
import Navigation from './Components/Logo/logo';
import About from './Pages/About/about';
import Product from './Pages/Product/product'
import Service from './Pages/Services/service'
// import Footer from './Components/Footer/footer'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App Site">
          <div className="Site-content">
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} exact />
              <Route path="/product" component={Product} exact />
              <Route path="/service" component={Service} exact />
            </Switch>
          </div>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
