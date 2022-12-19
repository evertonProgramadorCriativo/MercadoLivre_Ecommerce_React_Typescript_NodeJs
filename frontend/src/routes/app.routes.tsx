import React from 'react'
import { Switch, Route } from 'react-router-dom';
 import Dashboard from '../pages/Dashboard'
 import Product from '../pages/Product'
 import ShoppingCart from '../pages/ShoppingCart'
 import Layout from '../components/Layout';
 import List from '../pages/SignIn';


 const AppRoutes: React.FC = () => (
  <Layout>
      
      <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/loginho" exact component={List} />
          <Route path="/product"  exact component={Product} />
          <Route path="/shoppingcart"  exact component={ShoppingCart} />
      </Switch>
  </Layout>
 );

 export default AppRoutes;