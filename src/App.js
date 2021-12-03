import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddProduct from './component/AddProduct/AddProduct';
import './App.css';
import BootCollection from './component/BootCollection/BootCollection';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import PrivateRoute from './component/Login/PrivateRoute/PrivateRoute';
import Signup from './component/Login/Signup/Signup';
import ManageOrders from './component/ManageOrders/ManageOrders';
import Orders from './component/Orders/Orders';
import PlaceOrder from './component/PlaceOrder/PlaceOrder';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Dashboard from './Dashboard/Dashboard';
import Feedback from './Feedback/Feedback';
import Reviews from './component/Home/Reviews/Reviews';
import ManageProducts from './component/ManageProducts/ManageProducts';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home" >
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/boot-collection">
              <BootCollection></BootCollection>
            </Route>
            <PrivateRoute path="/place-order/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
