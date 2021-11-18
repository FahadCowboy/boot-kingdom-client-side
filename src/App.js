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

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home" >
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/signup">
              <Signup></Signup>
            </Route>
            <Route exact path="/boot-collection">
              <BootCollection></BootCollection>
            </Route>
            <PrivateRoute exact path="/place-order/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute exact path="/manage-orders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/add-product">
              <AddProduct></AddProduct>
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute exact path="/feedback">
              <Feedback></Feedback>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
